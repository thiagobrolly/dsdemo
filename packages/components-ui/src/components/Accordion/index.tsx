import { Root } from '@radix-ui/react-accordion';
import React from 'react';
import * as S from './styles';

export type AccordionProps = React.ComponentProps<typeof Root> & {
  width?: string;
  children: React.ReactNode;
};

export type AccordionItemProps = {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
};

type TriggerProps = {
  children: React.ReactNode;
};

type ContentProps = {
  children: React.ReactNode;
};

export const AccordionTrigger = ({ children }: TriggerProps) => (
  <S.AccordionHeader>
    <S.AccordionTrigger>
      {children}
      <S.ChevronDownIcon size={14} />
    </S.AccordionTrigger>
  </S.AccordionHeader>
);

export const AccordionContent = ({ children }: ContentProps) => (
  <S.AccordionContent>
    <S.ContentHeader>{children}</S.ContentHeader>
  </S.AccordionContent>
);

export const AccordionItem = ({
  children,
  disabled,
  value,
}: AccordionItemProps) => (
  <S.AccordionItem disabled={disabled} value={value}>
    {children}
  </S.AccordionItem>
);

export const Accordion = ({
  children,
  width = 'auto',
  ...props
}: AccordionProps) => (
  <S.AccordionWrapper width={width} {...props}>
    {children}
  </S.AccordionWrapper>
);
