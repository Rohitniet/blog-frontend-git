interface buttontype{
    
        onClick: () => void;
        isActive?: boolean;
        disabled?: boolean;
        children: React.ReactNode;
      
}


export const ToolbarButton = ({
    onClick,
    isActive,
    disabled,
    children,
  }: buttontype) => {
    console.log(onclick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`p-2 rounded-lg font-semibold transition 
          ${isActive ? "bg-blue-600 text-white" : "bg-gray-500 text-white hover:bg-blue-500"} 
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {children}
      </button>
    );
  };