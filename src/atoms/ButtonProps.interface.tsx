export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  label: string;
  src?: string;
  alt?: string;
  onClick?: () => void;
}
