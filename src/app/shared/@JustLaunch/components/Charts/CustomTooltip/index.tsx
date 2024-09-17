interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className='rounded bg-white p-2 shadow-lg'>
        <p className='text-sm font-semibold'>{label}</p>
        <div className='mt-1'>
          {payload.map((entry, index) => (
            <div key={`item-${index}`} className='flex items-center space-x-2'>
              <span
                className='inline-block h-3 w-3 rounded-sm'
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className='text-gray-600'>{entry.name}</span>
              <span className='font-semibold'>{entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};
