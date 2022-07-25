import styled from 'styled-components';
import { theme } from '@dsdemo/styles';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

type TooltipContentProps = {
  tooltipColor?: string;
  tooltipSize?: string;
};

export const TooltipRoot = styled(TooltipPrimitive.Root)``;

export const Trigger = styled(TooltipPrimitive.Trigger)`
  border: 0;
  width: fit-content;
  background: none;
  cursor: pointer;
`;

export const Content = styled(TooltipPrimitive.Content)<TooltipContentProps>`
  border-radius: ${theme.border.radius.small};
  box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.2);
  background-color: ${({ tooltipColor }) => tooltipColor || theme.color.white};
  width: ${({ tooltipSize }) => tooltipSize || 'auto'};
  padding: 10px;
`;

export const Arrow = styled(TooltipPrimitive.Arrow)<TooltipContentProps>`
  fill: ${({ tooltipColor }) => tooltipColor || theme.color.white};
`;
