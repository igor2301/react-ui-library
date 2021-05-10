declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module "*.svg" {
  const content: React.FC<React.SVGAttributes<SVGElement>>;
  export default content;
}
