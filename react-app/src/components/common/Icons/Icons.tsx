import React from "react";
import HomeIcon from "jsx:../../../assets/ic-home.svg";
import PieChartIcon from "jsx:../../../assets/ic-piechart.svg";
import ValidatorIcon from "jsx:../../../assets/ic-validator.svg";
import VoteIcon from "jsx:../../../assets/ic-vote.svg";
import MenuIcon from "jsx:../../../assets/ic-menu.svg";
import XIcon from "jsx:../../../assets/ic-x.svg";
import ChevronRightIcon from "jsx:../../../assets/ic-chevron-right.svg";
import DropDownIcon from "jsx:../../../assets/ic-dropdown.svg";
import CopyIcon from "jsx:../../../assets/ic-copy.svg";
import SendIcon from "jsx:../../../assets/ic-send.svg";
import AddIcon from "jsx:../../../assets/ic-add.svg";
import GiftIcon from "jsx:../../../assets/ic-gift.svg";
import ReinvestIcon from "jsx:../../../assets/ic-reinvest.svg";
import ExitIcon from "jsx:../../../assets/ic-exit.svg";
import LightningIcon from "jsx:../../../assets/ic-lightning.svg";
import EllipseIcon from "jsx:../../../assets/ic-ellipse.svg";
import LinkIcon from "jsx:../../../assets/ic-link.svg";
import ShareIcon from "jsx:../../../assets/ic-share.svg";
import ThinXIcon from "jsx:../../../assets/ic-thin-x.svg";
import ArrowNarrowRightIcon from "jsx:../../../assets/ic-arrow-narrow-right.svg";
import ArrowNarrowLeftIcon from "jsx:../../../assets/ic-arrow-narrow-left.svg";
import AccountIcon from "jsx:../../../assets/ic-account.svg";
import LikeCoinIcon from "jsx:../../../assets/ic-likecoin.svg";
import InfoIcon from "jsx:../../../assets/ic-info.svg";
import ChevronUpIcon from "jsx:../../../assets/ic-chevron-up.svg";
import ChevronDownIcon from "jsx:../../../assets/ic-chevron-down.svg";
import SafeIcon from "jsx:../../../assets/ic-safe.svg";
import CommentsQAIcon from "jsx:../../../assets/ic-commentsqa.svg";

enum IconType {
  Home = "Home",
  PieChart = "PieChart",
  Validator = "Validator",
  Vote = "Vote",
  Menu = "Menu",
  X = "X",
  ChevronRight = "ChevronRight",
  DropDown = "DropDown",
  Copy = "Copy",
  Send = "Send",
  Add = "Add",
  Gift = "Gift",
  Reinvest = "Reinvest",
  Exit = "Exit",
  Lightning = "Lightning",
  Ellipse = "Ellipse",
  Link = "Link",
  Share = "Share",
  ThinX = "ThinX",
  ArrowNarrowRight = "ArrowNarrowRight",
  ArrowNarrowLeft = "ArrowNarrowLeft",
  Account = "AccountIcon",
  LikeCoin = "LikeCoin",
  Info = "Info",
  ChevronUp = "ChevronUp",
  ChevronDown = "ChevronDown",
  Safe = "SafeIcon",
  CommentsQA = "CommentsQAIcon",
}

const iconMap = {
  [IconType.Home]: HomeIcon,
  [IconType.PieChart]: PieChartIcon,
  [IconType.Validator]: ValidatorIcon,
  [IconType.Vote]: VoteIcon,
  [IconType.Menu]: MenuIcon,
  [IconType.X]: XIcon,
  [IconType.ChevronRight]: ChevronRightIcon,
  [IconType.Copy]: CopyIcon,
  [IconType.DropDown]: DropDownIcon,
  [IconType.Send]: SendIcon,
  [IconType.Add]: AddIcon,
  [IconType.Gift]: GiftIcon,
  [IconType.Reinvest]: ReinvestIcon,
  [IconType.Exit]: ExitIcon,
  [IconType.Lightning]: LightningIcon,
  [IconType.Ellipse]: EllipseIcon,
  [IconType.Link]: LinkIcon,
  [IconType.Share]: ShareIcon,
  [IconType.ThinX]: ThinXIcon,
  [IconType.ArrowNarrowRight]: ArrowNarrowRightIcon,
  [IconType.ArrowNarrowLeft]: ArrowNarrowLeftIcon,
  [IconType.Account]: AccountIcon,
  [IconType.LikeCoin]: LikeCoinIcon,
  [IconType.Info]: InfoIcon,
  [IconType.ChevronDown]: ChevronDownIcon,
  [IconType.ChevronUp]: ChevronUpIcon,
  [IconType.Safe]: SafeIcon,
  [IconType.CommentsQA]: CommentsQAIcon,
};

function getIcon(icon: IconType) {
  if (icon in iconMap) {
    return iconMap[icon];
  }
  throw new Error(`Icon ${icon} not found`);
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconType;
}

const Icon: React.FC<IconProps> = (props) => {
  const { icon, ...rest } = props;

  const Component = getIcon(icon);

  return <Component {...rest} />;
};

export { IconType, Icon };
