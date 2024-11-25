import React from 'react';
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaHamburger,
  FaTag,
  FaStore,
  FaChevronRight,
  FaPen,
  FaSearch,
  FaGreaterThan,
  FaChevronLeft,
  FaUser,
  FaCaretDown,
  FaTrash,
  FaDownload,
  FaEllipsisV,
} from 'react-icons/fa';
import { AiFillProduct } from 'react-icons/ai';

import { IconType } from 'react-icons';

// Define icon mapping
interface IconMap {
  [key: string]: IconType;
}

const iconMap: IconMap = {
  home: FaHome,
  about: FaInfoCircle,
  contact: FaEnvelope,
  dashboard: FaHome,
  category: AiFillProduct,
  product: FaHamburger,
  menu: FaHamburger,
  price: FaTag,
  store: FaStore,
  chevronRight: FaChevronRight,
  edit: FaPen,
  search: FaSearch,
  expand: FaGreaterThan,
  chevronLeft: FaChevronLeft,
  userIcon: FaUser,
  caretDown: FaCaretDown,
  delete: FaTrash,
  download: FaDownload,
  ellipsis: FaEllipsisV
};

interface IconProps {
  iconName: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ iconName, className }) => {
  const IconComponent = iconMap[iconName];

  return IconComponent ? <IconComponent className={className} /> : null;
};

export default Icon;
