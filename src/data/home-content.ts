export type NavItem = {
  href: string;
  label: string;
};

export type WhyCard = {
  title: string;
  description: string;
};

export type FormatCard = {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: "music" | "image" | "video" | "project";
  iconSrc?: string;
  mediaHint: string;
  provenanceHint: string;
  learnMoreHref: string;
};

export type ToolCard = {
  id: "desktop" | "player";
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  status: string;
  downloads: {
    mac: PlatformDownload;
    windows: PlatformDownload;
    linux: PlatformDownload;
  };
};

export type PlatformDownload = {
  label: string;
  href?: string;
  status: "Available now" | "Coming soon";
};

export const navItems: NavItem[] = [
  { href: "#formats", label: "Formats" },
  { href: "#tools", label: "Tools" },
  { href: "#signal", label: "AIFX Signal" },
  { href: "#support", label: "Support" },
];

export const whyAifxCards: WhyCard[] = [
  {
    title: "No authorship transparency",
    description:
      "AI-generated media often moves without clear declarations of who directed, edited, or approved the work.",
  },
  {
    title: "No packaging standard",
    description:
      "Creative outputs, prompts, manifests, and supporting assets are scattered across formats that were never designed for provenance.",
  },
  {
    title: "Trust is hard",
    description:
      "Without declared metadata and integrity checks, audiences and tools cannot reliably assess what a file is or where it came from.",
  },
];

export const formatCards: FormatCard[] = [
  {
    id: "aifm",
    name: "AIFM",
    title: "AI Music Container",
    description:
      "Package generated tracks, stems, prompts, credits, and provenance metadata in a single portable format.",
    icon: "music",
    iconSrc: "/images/formats/aifm-icon.png",
    mediaHint:
      "Audio files, stems, cover art, lyrics, and session assets.",
    provenanceHint:
      "Creator declaration, tools used, prompts or workflow notes, timestamps, and integrity verification.",
    learnMoreHref: "https://github.com/AI-First-Exchange/AIFM-Standard",
  },
  {
    id: "aifi",
    name: "AIFI",
    title: "AI Image Container",
    description:
      "Wrap images with authorship declarations, generation details, and integrity metadata that travel with the file.",
    icon: "image",
    iconSrc: "/images/formats/aifi-icon.png",
    mediaHint:
      "Image files, layers, thumbnails, masks, and reference assets.",
    provenanceHint:
      "Creator declaration, generation or edit tool, prompt or edit notes, model version, and integrity verification.",
    learnMoreHref: "https://github.com/AI-First-Exchange/AIFI-Standard",
  },
  {
    id: "aifv",
    name: "AIFV",
    title: "AI Video Container",
    description:
      "Capture moving-image outputs, edits, render lineage, and verification signals in a durable video package.",
    icon: "video",
    iconSrc: "/images/formats/aifv-icon.png",
    mediaHint:
      "Video files, posters or thumbnails, subtitles, audio tracks, and project exports.",
    provenanceHint:
      "Creator declaration, model or tool chain, prompts or edit pipeline, render metadata, and integrity verification.",
    learnMoreHref: "https://github.com/AI-First-Exchange/AIFV-Standard",
  },
  {
    id: "aifp",
    name: "AIFP",
    title: "AI Project Container",
    description:
      "Bundle full creative projects with linked assets, manifests, and production context for collaboration and archival.",
    icon: "project",
    iconSrc: "/images/formats/aifp-icon.png",
    mediaHint:
      "A multi-asset bundle for audio, video, images, project files, and supporting documents.",
    provenanceHint:
      "Creator declaration, project manifest, tool chain, workflow history, and integrity hashes or signatures.",
    learnMoreHref: "https://github.com/AI-First-Exchange/AIFP-Standard",
  },
];

export const toolCards: ToolCard[] = [
  {
    id: "desktop",
    name: "AIFX Desktop",
    description:
      "Create, inspect, and validate AIFX files locally with a workflow designed for creators, publishers, and standards adopters.",
    imageSrc: "/images/aifx-desktop.png",
    imageAlt: "AIFX Desktop application icon",
    status: "Available now",
    downloads: {
      mac: {
        label: "macOS",
        href: "https://github.com/AI-First-Exchange/aifx-desktop/releases/download/v0.4.1/AIFX-Desktop-macOS-universal.dmg",
        status: "Available now",
      },
      windows: {
        label: "Windows",
        href: "https://github.com/AI-First-Exchange/aifx-desktop/releases/download/v0.4.1/AIFX-Desktop-Windows-x64.exe",
        status: "Available now",
      },
      linux: {
        label: "Linux",
        href: "https://github.com/AI-First-Exchange/aifx-desktop/releases/download/v0.4.1/AIFX-Desktop-Linux-x86_64.AppImage",
        status: "Available now",
      },
    },
  },
  {
    id: "player",
    name: "AIFX Player",
    description:
      "Securely view AI content with readable provenance, authorship declarations, and integrity checks surfaced in context.",
    imageSrc: "/images/aifx-player.png",
    imageAlt: "AIFX Player application icon",
    status: "Available now",
    downloads: {
      mac: {
        label: "macOS",
        href: "https://github.com/AI-First-Exchange/AIFX-Player/releases/download/v0.3.0/AIFX.Player.dmg",
        status: "Available now",
      },
      windows: {
        label: "Windows",
        href: "https://github.com/AI-First-Exchange/AIFX-Player/releases/download/v0.3.0/AIFX-Player-Setup.exe",
        status: "Available now",
      },
      linux: {
        label: "Linux",
        href: "https://github.com/AI-First-Exchange/AIFX-Player/releases/download/v0.3.0/AIFX.Player-0.3.0-x86_64.AppImage",
        status: "Available now",
      },
    },
  },
];

export const footerLinks: NavItem[] = [
  { href: "#formats", label: "Formats" },
  { href: "#tools", label: "Tools" },
  { href: "#formats", label: "Docs" },
  { href: "https://github.com/AI-First-Exchange", label: "GitHub" },
  { href: "#why-aifx", label: "About" },
];
