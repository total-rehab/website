import React, { FunctionComponent } from 'react';
import ImageIcon from '@mui/icons-material/Image';

type ImagePlaceholderProps = {
  width: number;
  height: number;
};

const MAX_PLACEHOLDER_ICON_SIZE = 100;
const MIN_PLACEHOLDER_ICON_SIZE = 25;

export const ImagePlaceholder: FunctionComponent<ImagePlaceholderProps> = ({
  width,
  height,
}: ImagePlaceholderProps) => {
  const dynamicPlaceholderIconSize = width / 5;
  const placeholderIconSize = Math.min(
    Math.max(dynamicPlaceholderIconSize, MIN_PLACEHOLDER_ICON_SIZE),
    MAX_PLACEHOLDER_ICON_SIZE,
  );

  return (
    <div className="bg-gray-100 h-full flex items-center justify-center">
      <ImageIcon
        style={{ fontSize: placeholderIconSize }}
        className="text-gray-600"
      />
    </div>
  );
};
