export interface SearchBarProps {
  placeholder?: string;
  isVisible?: boolean;
  onSearch?: (query: string) => void;
}
