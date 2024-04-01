interface NavContentProps {
  content: string;
}

export function NavContent({ content }: NavContentProps) {
  return (
    <span className='font-medium text-white group-hover:ml-2 group-hover:text-primary/700 group-data-[active=true]:text-primary/700'>
      {content}
    </span>
  );
}
