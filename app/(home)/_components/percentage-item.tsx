import { ReactNode } from "react";

interface PercentageItemProps {
  icon: ReactNode;
  title: string;
  value: number;
}

const PercentageItem = ({ icon, title, value }: PercentageItemProps) => {
  return (
    <div className="flex justify-between items-center">
      {/* ICONE */}
      <div className="flex items-center gap-2">
        <div className="bg-white bg-opacity-[3%] rounded-lg">
          {icon}
        </div>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      {/* PORCENTAGEM */}
      <p className="text-sm font-bold ml-2">
        {isNaN(value) ? 0 : value}%
      </p>
    </div>
  );
}

export default PercentageItem;