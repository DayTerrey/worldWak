import PublicIcon from "@mui/icons-material/Public";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center ml-0">
      <PublicIcon className="text-purple-600 h-10 w-10" />
      <span className="text-black ml-0">МирВакансий</span>
    </div>
  );
};
