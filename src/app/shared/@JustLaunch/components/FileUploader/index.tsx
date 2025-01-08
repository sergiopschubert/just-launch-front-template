'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X } from 'lucide-react';
import Image from 'next/image';

interface FileUploaderProps {
  onFileSelect: (files: File[]) => void;
  maxSize?: number;
  accept?: string[];
  multiple?: boolean;
  className?: string;
}

export function FileUploader({
  onFileSelect,
  maxSize = 5242880, // 5MB
  accept = ['image/*', 'application/pdf'],
  multiple = false,
  className = '',
}: FileUploaderProps) {
  const [preview, setPreview] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any[]) => {
      if (rejectedFiles.length > 0) {
        setError('Arquivo inválido ou muito grande');
        return;
      }

      const previewUrls = acceptedFiles.map((file) =>
        URL.createObjectURL(file)
      );
      setPreview(previewUrls);
      onFileSelect(acceptedFiles);
      setError('');
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize,
    accept: accept.reduce((acc, curr) => ({ ...acc, [curr]: [] }), {}),
    multiple,
  });

  const removeFile = (index: number) => {
    setPreview((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className='w-full'>
      <div
        {...getRootProps()}
        className={`cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-colors
          ${isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300'}
          ${className}`}
      >
        <input {...getInputProps()} />
        <Upload className='mx-auto h-12 w-12 text-gray-400' />
        <p className='mt-2 text-sm text-gray-600'>
          {isDragActive
            ? 'Solte os arquivos aqui...'
            : 'Arraste arquivos ou clique para selecionar'}
        </p>
        <p className='mt-1 text-xs text-gray-500'>
          {`Máximo ${(maxSize / 1024 / 1024).toFixed(0)}MB`}
        </p>
      </div>

      {error && <p className='mt-2 text-sm text-red-500'>{error}</p>}

      {preview.length > 0 && (
        <div className='mt-4 grid grid-cols-4 gap-4'>
          {preview.map((url, index) => (
            <div key={url} className='relative'>
              <Image
                src={url}
                alt={`Preview ${index + 1}`}
                className='h-24 w-full rounded-lg object-cover'
                width={96}
                height={96}
              />
              <button
                onClick={() => removeFile(index)}
                className='absolute -right-2 -top-2 rounded-full bg-error/500 p-1 text-white hover:bg-error/600'
              >
                <X />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
