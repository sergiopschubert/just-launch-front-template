'use client';
import { Popup } from '@/app/shared/components/Popup';
import {
  Facebook,
  Link,
  Linkedin,
  Mail,
  Phone,
  Send,
  Share2,
  X,
} from 'lucide-react';
import { ReactNode, useState } from 'react';
import { toast } from 'react-toastify';

interface PopupToShareLinkProps {
  children: ReactNode;
  url: string;
}

export function PopupToShareLink({ children, url }: PopupToShareLinkProps) {
  const [open, setOpen] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(url);
    setOpen(false);
    toast.success('Seu link foi copiado para a área de transferência!');
  };
  return (
    <Popup.Root open={open} onOpenChange={setOpen} trigger={children}>
      <Popup.Content
        className='fixed left-1/2 top-1/2 z-50  h-auto w-3/4 -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-md bg-white p-8 text-gray-900 shadow lg:w-1/4'
        icon={Share2}
        disabledIcon={true}
        disabled={true}
      >
        <a
          onClick={copyToClipboard}
          className='mt-3 flex items-center space-x-2 text-center hover:rounded-l-full hover:bg-primary/600 hover:text-primary/50 active:scale-95 active:bg-primary/600'
        >
          <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/200 text-center'>
            <Link className='h-5 w-5 text-primary/500' />
          </div>
          Copiar link
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          className='mt-3 flex items-center space-x-2 text-center hover:rounded-l-full hover:bg-primary/600 hover:text-primary/50 active:scale-95 active:bg-primary/600'
        >
          <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue/800 text-center'>
            <Facebook className='h-5 w-5 text-white' />
          </div>
          Compartilhar no Facebook
        </a>
        <a
          href={`https://t.me/share/url?url=&text=${url}`}
          className='mt-3 flex items-center space-x-2 text-center hover:rounded-l-full hover:bg-primary/600 hover:text-primary/50 active:scale-95 active:bg-primary/600'
        >
          <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue/400 text-center'>
            <Send className='h-5 w-5 text-white' />
          </div>
          Compartilhar no Telegram
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
          className='mt-3 flex items-center space-x-2 text-center hover:rounded-l-full hover:bg-primary/600 hover:text-primary/50 active:scale-95 active:bg-primary/600'
        >
          <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue/700  text-center'>
            <Linkedin className='h-5 w-5  text-white' />
          </div>
          Compartilhar no Linkedin
        </a>
        <a
          href={`mailto:?subject=${url}&body=${url}`}
          className='mt-3 flex items-center space-x-2 text-center hover:rounded-l-full hover:bg-primary/600 hover:text-primary/50 active:scale-95 active:bg-primary/600'
        >
          <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray/700 text-center'>
            <Mail className='h-5 w-5  text-white' />
          </div>
          Compartilhar no Email
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${url}`}
          className='mt-3 flex items-center space-x-2 text-center hover:rounded-l-full hover:bg-primary/600 hover:text-primary/50 active:scale-95 active:bg-primary/600'
        >
          <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray/900  text-center'>
            <X className='h-5 w-5 text-white' />
          </div>
          Compartilhar no X
        </a>
        <a
          href={`https://api.whatsapp.com/send/?text=${url}&type=custom_url&app_absent=0`}
          className='mt-3 flex items-center space-x-2 text-center hover:rounded-l-full hover:bg-primary/600 hover:text-primary/50 active:scale-95 active:bg-primary/600'
        >
          <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-green/500 text-center'>
            <Phone className='h-5 w-5  text-white' />
          </div>
          Compartilhar no Whatsapp
        </a>
      </Popup.Content>
    </Popup.Root>
  );
}
