interface CustomLegendProps {
  payload?: any[];
}

export const CustomLegend: React.FC<CustomLegendProps> = ({ payload }) => {
  if (!payload) return null;

  return (
    <div className='mt-2 flex space-x-4'>
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className='flex items-center space-x-2'>
          <span
            className='inline-block h-3 w-3 rounded-sm'
            style={{ backgroundColor: entry.color }}
          ></span>
          <span className='font-light text-gray-400'>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};
