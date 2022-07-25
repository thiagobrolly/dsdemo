import styled from 'styled-components';
import { theme } from '@dsdemo/styles';
import * as PopoverPrimitive from '@radix-ui/react-popover';

export interface TooltipProps {
  colorContent?: string;
}

export const Trigger = styled(PopoverPrimitive.Trigger)`
  border: 0;
  width: fit-content;
  background: none;
  cursor: pointer;
`;

export const Content = styled(PopoverPrimitive.Content)<TooltipProps>`
  border-radius: ${theme.border.radius.small};
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  background-color: ${({ colorContent }) => colorContent || theme.color.white};
  padding: 10px;
`;

export const Arrow = styled(PopoverPrimitive.Arrow)<TooltipProps>`
  fill: ${({ colorContent }) => colorContent || theme.color.white};
`;
