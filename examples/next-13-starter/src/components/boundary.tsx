import clsx from 'clsx';
import React from 'react';

const Label = (props: {
  children: React.ReactNode;
  animateRerendering?: boolean;
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
}) => {
  return (
    <div
      className={clsx('rounded-full px-1.5 shadow-[0_0_1px_3px_black]', {
        'bg-gray-800 text-gray-300': props.color === 'default',
        'bg-vercel-pink text-white': props.color === 'pink',
        'bg-vercel-blue text-white': props.color === 'blue',
        'bg-vercel-cyan text-white': props.color === 'cyan',
        'bg-vercel-violet text-violet-100': props.color === 'violet',
        'bg-vercel-orange text-white': props.color === 'orange',
        'animate-[highlight_1s_ease-in-out_1]': props.animateRerendering,
      })}
    >
      {props.children}
    </div>
  );
};
export const Boundary = (props: {
  children: React.ReactNode;
  labels?: string[];
  size?: 'small' | 'default';
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
  animateRerendering?: boolean;
}) => {
  const { labels = ['children'], size = 'default', color = 'default' } = props;
  return (
    <div
      className={clsx('relative rounded-lg border border-dashed', {
        'p-3 lg:p-5': size === 'small',
        'p-4 lg:p-9': size === 'default',
        'border-gray-700': color === 'default',
        'border-vercel-pink': color === 'pink',
        'border-vercel-blue': color === 'blue',
        'border-vercel-cyan': color === 'cyan',
        'border-vercel-violet': color === 'violet',
        'border-vercel-orange': color === 'orange',
        'text-vercel-pink animate-[rerender_1s_ease-in-out_1]':
          props.animateRerendering,
      })}
    >
      <div
        className={clsx(
          'absolute -top-2.5 flex gap-x-1 text-[9px] uppercase leading-4 tracking-widest',
          {
            'left-3 lg:left-5': size === 'small',
            'left-4 lg:left-9': size === 'default',
          },
        )}
      >
        {labels.map((label) => {
          return (
            <Label
              key={label}
              color={color}
              animateRerendering={props.animateRerendering}
            >
              {label}
            </Label>
          );
        })}
      </div>

      {props.children}
    </div>
  );
};