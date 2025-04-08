
// Centralized icons export file
// Using only Lucide icons instead of @tabler/icons-react
import {
  Lock as IconLock,
  GitBranch as IconArrowsSplit,
  Network as IconNetwork,
  Fingerprint as IconFingerprint,
  Database as IconDatabase,
  Users as IconUsers,
  Server as IconServer,
  ShieldCheck as IconShieldLock,
  Code as IconCode,
  Wallet as IconWallet
} from "lucide-react";

export {
  IconLock,
  IconArrowsSplit,
  IconNetwork,
  IconFingerprint,
  IconDatabase,
  IconUsers,
  IconServer,
  IconShieldLock,
  IconCode,
  IconWallet
};

// Only export specific icons that are actually used in the application
// This improves tree-shaking and prevents loading unused icons
export {
  FileText,
  Wallet,
  LineChart,
  Target,
  Layers,
  ScrollText,
  Star,
  Search,
  ShieldCheck,
  Coins,
  ShoppingCart,
  Server,
  Globe,
  Database,
  Share2,
  Boxes,
  LifeBuoy,
  MessageCircle,
  HelpCircle,
  Download,
  Bell,
  BookOpen,
  Video,
  Users,
  PiggyBank,
  Terminal,
  Repeat,
  Menu,
  Building2,
  Vote,
  Clock
} from "lucide-react";

// Re-export your custom icons
export { Icons } from "@/components/ui/icons";
export { BoxesStacked, ChartBar } from "@/components/icons";
