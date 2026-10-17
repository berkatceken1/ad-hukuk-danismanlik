import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ScaleIcon,
  BuildingOffice2Icon,
  BriefcaseIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  HomeModernIcon,
  DocumentTextIcon,
  ShoppingBagIcon,
  BanknotesIcon,
  AcademicCapIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const icons = {
  down: ArrowDownIcon,
  arrow: ArrowRightIcon,
  external: ArrowUpRightIcon,
  menu: Bars3Icon,
  close: XMarkIcon,
  phone: PhoneIcon,
  mail: EnvelopeIcon,
  pin: MapPinIcon,
  clock: ClockIcon,
  scale: ScaleIcon,
  business: BuildingOffice2Icon,
  work: BriefcaseIcon,
  family: UserGroupIcon,
  shield: ShieldCheckIcon,
  home: HomeModernIcon,
  document: DocumentTextIcon,
  shopping: ShoppingBagIcon,
  money: BanknotesIcon,
  education: AcademicCapIcon,
  check: CheckIcon,
  previous: ChevronLeftIcon,
  next: ChevronRightIcon,
};

export type IconName = keyof typeof icons;

export default function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const Component = icons[name];
  return (
    <Component
      aria-hidden="true"
      className={`icon ${className}`}
      strokeWidth={1.35}
    />
  );
}
