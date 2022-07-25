import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlinePartner = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20.221 16.228"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlinePartner"
    {...props}
  >
    <path
      data-name="Caminho 3220"
      d="M16.129 3.078a.395.395 0 1 0-.559 0 .4.4 0 0 0 .559 0zm0 0"
    />
    <path
      data-name="Caminho 3221"
      d="M5.153 3.895a.395.395 0 1 0-.558 0 .4.4 0 0 0 .558 0zm0 0"
    />
    <path
      data-name="Caminho 3222"
      d="m2.829 6.169 1.182-1.182a.395.395 0 1 0-.559-.558L2.27 5.612a.395.395 0 0 0 .559.558zm0 0"
    />
    <path
      data-name="Caminho 3223"
      d="M17.432 5.025a.395.395 0 0 0 .559-.558l-.788-.788a.395.395 0 0 0-.559.558zm0 0"
    />
    <path
      data-name="Caminho 3224"
      d="M20.101 4.584 15.638.115a.4.4 0 0 0-.55-.008l-2 1.886a1.655 1.655 0 0 1-1.233.558 3.134 3.134 0 0 0-2.297.85 2.941 2.941 0 0 0-1.848-.8L5.735.629a.4.4 0 0 0-.559 0L.116 5.69a.394.394 0 0 0-.009.549l.009.01 3.3 3.292-.139.139a1.381 1.381 0 0 0 .992 2.358 1.381 1.381 0 0 0 1.4 1.4 1.38 1.38 0 0 0 1.4 1.4 1.382 1.382 0 0 0 2.359.993l.14-.14.14.14a1.382 1.382 0 0 0 2.359-.992 1.38 1.38 0 0 0 1.4-1.4 1.382 1.382 0 0 0 1.4-1.4 1.381 1.381 0 0 0 .992-2.358l-.158-.14c2.754-2.751-.73.736 4.4-4.4a.4.4 0 0 0 0-.558zM.954 5.969l4.5-4.5 1.519 1.515-4.5 4.5zm2.879 5.107a.592.592 0 0 1 0-.838l1.4-1.4a.593.593 0 0 1 .838.838l-1.4 1.4a.594.594 0 0 1-.838 0zm1.4 1.4a.592.592 0 0 1 0-.838l1.4-1.4a.593.593 0 1 1 .838.838l-1.4 1.4a.593.593 0 0 1-.838 0zm1.4 1.4a.592.592 0 0 1 0-.838l1.4-1.4a.593.593 0 0 1 .838.838l-1.4 1.4a.594.594 0 0 1-.838 0zm1.4 1.4a.592.592 0 0 1 0-.838l1.4-1.4a.593.593 0 0 1 .838.838l-1.4 1.4a.593.593 0 0 1-.838 0zm3.072 0a.593.593 0 0 1-.838 0l-.14-.14.7-.7a1.427 1.427 0 0 0 .129-.15l.15.15a.592.592 0 0 1 0 .838zm4.189-4.189a.594.594 0 0 1-.838 0L12.63 9.261a.395.395 0 0 0-.559.558l1.815 1.815a.593.593 0 0 1-.838.838l-1.815-1.816a.4.4 0 0 0-.559.559l1.815 1.815a.592.592 0 0 1-.419 1.011c-.375 0-.5-.3-.852-.607a1.382 1.382 0 0 0-1.4-1.368 1.381 1.381 0 0 0-1.4-1.4 1.381 1.381 0 0 0-1.4-1.4 1.382 1.382 0 0 0-2.347-.983l-.7.7-.94-.939L7.68 3.395a2.133 2.133 0 0 1 1.321.561L7.882 5.072a1.58 1.58 0 0 0 2.234 2.234l1.117-1.117 4.049 4.05a.593.593 0 0 1 0 .837zm-.139-2.094L11.792 5.63l.279-.279a.4.4 0 0 0-.559-.559L9.558 6.748A.79.79 0 0 1 8.441 5.63l1.608-1.608a2.353 2.353 0 0 1 1.8-.677 2.319 2.319 0 0 0 1.493-.523l3.933 4.035-2.131 2.125zm2.678-2.692-3.908-4.01L15.351.945l3.917 3.918zm0 0"
    />
  </svg>
);