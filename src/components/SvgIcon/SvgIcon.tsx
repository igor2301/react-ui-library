import React, { useEffect, useRef } from "react";

export enum Icon {
  Arrow = "arrow",
  Comment = "comment",
  Share = "share",
  Trash = "trash",
  Hide = "hide",
  Save = "save",
  Report = "report",
  Chart = "chart",
  Menu = "menu",
  NoUser = "nouser",
}

interface Props {
  name: Icon;
  className?: string;
}

export const SvgIcon: React.FC<Props> = (props) => {
  const { name, className } = props;
  const SvgRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    let mounted = true;

    const importIcon = async () => {
      setLoading(true);
      const { default: icon } = await import(`../../assets/images/${name}.svg`);
      SvgRef.current = icon;
      if (mounted) {
        setLoading(false);
      }
    };

    importIcon();

    return () => {
      mounted = false;
    };
  }, [name]);

  const { current: Svg } = SvgRef;
  return <div className={className || ""}>{!loading && Svg && <Svg />}</div>;
};
