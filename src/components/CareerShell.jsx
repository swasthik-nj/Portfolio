import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../projects";
import { Experience } from "../Experience";
import { eduData } from "../institution";

const PROMPT = "visitor@swasthik:~$";
const RESUME_URL = "https://tinyurl.com/swasthiknj-resumezz";
const EMAIL = "swastiknj76@gmail.com";
const PHONE = "+91 8951192848";

const LINKS = {
  github: "https://github.com/swasthik-nj",
  linkedin: "https://www.linkedin.com/in/swasthik-nj",
  twitter: "https://x.com/swasthik_nj",
  instagram: "https://www.instagram.com/swasthik_birwa_official/",
  portfolio: "https://swasthik-nj.me",
};

const NAME_BANNER = String.raw`   _____                    __  __    _ __      _   __       __
  / ___/      ______ ______/ /_/ /_  (_) /__   / | / /      / /
  \__ \ | /| / / __ \`/ ___/ __/ __ \/ / //_/  /  |/ /  __  / /
 ___/ / |/ |/ / /_/ (__  ) /_/ / / / / ,<    / /|  /  / /_/ /
/____/|__/|__/\__,_/____/\__/_/ /_/_/_/|_|  /_/ |_/   \____/`;

function line(text, type = "output") {
  return { id: crypto.randomUUID(), text, type };
}

function helpText() {
  return [
    "Available commands:",
    "",
    "  whoami              Who I am",
    "  about               Short bio",
    "  skills              Tech stack",
    "  experience          Internships",
    "  education           Education history",
    "  ls projects         List projects",
    "  open <project>      Open a project (number or name)",
    "  contact             Contact details",
    "  contact email       Copy email to clipboard",
    "  resume              Open resume",
    "  explore             Go to full portfolio",
    "  socials             Social links",
    "  open github         Open GitHub",
    "  open linkedin       Open LinkedIn",
    "  neofetch            System-style profile card",
    "  clear               Clear the terminal",
    "  help                Show this help",
    "",
    "Tip: ↑ / ↓ history · Ctrl+C cancel · Esc close",
  ].join("\n");
}

function neofetchText() {
  return [
    "          .--.          visitor@swasthik",
    "         |o_o |         ----------------",
    "         |:_/ |         OS: Portfolio CLI",
    "        //   \\ \\        Host: Swasthik N J",
    "       (|     | )       Role: Full-Stack Developer",
    "      /'\\_   _/`\\       Stack: React · Node · MongoDB",
    "      \\___)=(___/       Location: Mangaluru, India",
    "                        Status: Open to opportunities",
  ].join("\n");
}

const typeColor = {
  banner: "text-sky-200",
  command: "text-orange-400",
  error: "text-red-400",
  success: "text-orange-300",
  system: "text-sky-300",
  muted: "text-neutral-500",
  accent: "text-orange-300/90",
  output: "text-neutral-300",
};

export default function CareerShell({ open, onClose }) {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIndex, setHistIndex] = useState(-1);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (!open) {
      setLines([]);
      setInput("");
      return;
    }

    setLines([
      line(NAME_BANNER, "banner"),
      line(""),
      line("Welcome to my terminal portfolio. (Version 1.3.1)", "system"),
      line('Type "help" to see available commands.', "muted"),
      line(""),
    ]);
    setTimeout(() => inputRef.current?.focus(), 80);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const append = (newLines) => {
    setLines((prev) => [...prev, ...newLines]);
  };

  const runCommand = async (raw) => {
    const cmd = raw.trim();
    if (!cmd) return;

    setCmdHistory((prev) => [...prev, cmd]);
    setHistIndex(-1);
    append([line(`${PROMPT} ${cmd}`, "command")]);

    const parts = cmd.toLowerCase().split(/\s+/);
    const base = parts[0];
    const arg = parts.slice(1).join(" ");
    let output = [];

    switch (base) {
      case "help":
      case "?":
        output = [line(helpText())];
        break;

      case "whoami":
        output = [
          line("Swasthik N J", "success"),
          line("Full-Stack Developer · MCA Student"),
          line("Building modern web experiences with React & Node.js"),
        ];
        break;

      case "about":
        output = [
          line(
            "I'm a full-stack developer and MCA student at NMAM Institute of Technology, Nitte."
          ),
          line(
            "I enjoy building web apps that solve real problems — from booking systems to alumni platforms."
          ),
          line(
            "Currently learning TypeScript and Next.js while shipping MERN projects."
          ),
        ];
        break;

      case "skills":
      case "stack":
        output = [
          line("Frontend   React · JavaScript · Tailwind CSS"),
          line("Backend    Node.js · Express"),
          line("Database   MongoDB · Supabase"),
          line("Tools      Git · GitHub · Vite"),
          line("Learning   TypeScript · Next.js"),
        ];
        break;

      case "experience":
      case "exp":
        output = Experience.flatMap((item, i) => [
          line(`${i + 1}. ${item.company}`, "success"),
          line(`   ${item.desc.replace(/^-\s*/, "")}`),
          line(""),
        ]);
        break;

      case "education":
      case "edu":
        output = eduData.flatMap((item) => [
          line(`${item.institution}  (${item.year})`, "success"),
          line(`  ${item.description}`),
          line(""),
        ]);
        break;

      case "ls":
        if (!arg || arg === "projects" || arg === ".") {
          output = [
            line("projects/", "system"),
            ...projects.map((p, i) => line(`  [${i + 1}]  ${p.title}`)),
            line(""),
            line('Use: open <number>  or  open "<name>"', "muted"),
          ];
        } else {
          output = [
            line(
              `ls: cannot access '${arg}': No such file or directory`,
              "error"
            ),
          ];
        }
        break;

      case "open": {
        if (!arg) {
          output = [
            line(
              "Usage: open <project|github|linkedin|twitter|instagram>",
              "error"
            ),
          ];
          break;
        }

        if (LINKS[arg]) {
          window.open(LINKS[arg], "_blank", "noopener,noreferrer");
          output = [line(`Opening ${arg}...`, "success")];
          break;
        }

        const byIndex = Number(arg);
        let project = null;
        if (
          !Number.isNaN(byIndex) &&
          byIndex >= 1 &&
          byIndex <= projects.length
        ) {
          project = projects[byIndex - 1];
        } else {
          project = projects.find((p) =>
            p.title
              .toLowerCase()
              .includes(arg.replace(/"/g, "").toLowerCase())
          );
        }

        if (project) {
          window.open(project.url, "_blank", "noopener,noreferrer");
          output = [line(`Opening ${project.title}...`, "success")];
        } else {
          output = [
            line(`open: '${arg}' not found.`, "error"),
            line("Try: ls projects", "muted"),
          ];
        }
        break;
      }

      case "contact":
        if (arg === "email" || arg === "--email") {
          try {
            await navigator.clipboard.writeText(EMAIL);
            output = [line(`Copied ${EMAIL} to clipboard.`, "success")];
          } catch {
            output = [line(`Email: ${EMAIL}`)];
          }
        } else if (arg === "phone" || arg === "--phone") {
          try {
            await navigator.clipboard.writeText(PHONE);
            output = [line(`Copied ${PHONE} to clipboard.`, "success")];
          } catch {
            output = [line(`Phone: ${PHONE}`)];
          }
        } else {
          output = [
            line(`Email     ${EMAIL}`),
            line(`Phone     ${PHONE}`),
            line(`Location  Mangaluru, Karnataka, India`),
            line(""),
            line("Tip: contact email  → copy email", "muted"),
          ];
        }
        break;

      case "resume":
      case "cv":
        window.open(RESUME_URL, "_blank", "noopener,noreferrer");
        output = [line("Opening resume...", "success")];
        break;

      case "explore":
      case "portfolio":
        output = [line("Navigating to /explore...", "success")];
        setTimeout(() => {
          onClose();
          navigate("/explore");
        }, 300);
        break;

      case "socials":
        output = Object.entries(LINKS).map(([key, url]) =>
          line(`${key.padEnd(12)} ${url}`)
        );
        break;

      case "neofetch":
        output = [line(neofetchText(), "accent")];
        break;

      case "clear":
      case "cls":
        setLines([]);
        return;

      case "sudo":
        output = [
          line(
            "Nice try. Permission denied — but respect for trying.",
            "error"
          ),
        ];
        break;

      case "pwd":
        output = [line("/home/swasthik/portfolio")];
        break;

      case "date":
        output = [line(new Date().toString())];
        break;

      case "echo":
        output = [line(cmd.slice(5))];
        break;

      default:
        output = [
          line(`Command not found: ${base}`, "error"),
          line('Type "help" for available commands.', "muted"),
        ];
    }

    append([...output, line("")]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const value = input;
    setInput("");
    runCommand(value);
  };

  const onKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c") {
      e.preventDefault();
      e.stopPropagation();
      if (input) {
        append([line(`${PROMPT} ${input}^C`, "command"), line("")]);
        setInput("");
      } else {
        append([line(`${PROMPT} ^C`, "command"), line("")]);
      }
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!cmdHistory.length) return;
      const next =
        histIndex === -1 ? cmdHistory.length - 1 : Math.max(0, histIndex - 1);
      setHistIndex(next);
      setInput(cmdHistory[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIndex === -1) return;
      const next = histIndex + 1;
      if (next >= cmdHistory.length) {
        setHistIndex(-1);
        setInput("");
      } else {
        setHistIndex(next);
        setInput(cmdHistory[next]);
      }
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-3 sm:p-6">
      <button
        type="button"
        aria-label="Close terminal"
        className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div
        className="terminal-boot-in relative z-10 flex w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-neutral-700/90 bg-[#0a0a0a] shadow-[0_25px_80px_rgba(0,0,0,0.65)]"
        style={{ height: "min(560px, 85vh)" }}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Title bar — matches your screenshot style */}
        <div className="flex items-center justify-between border-b border-neutral-800 bg-[#141414] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="h-3 w-3 rounded-full bg-[#ff5f57] hover:brightness-110"
              aria-label="Close"
            />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <p className="font-mono text-[12px] text-neutral-300">
            swasthik — Career Shell
          </p>
          <span className="w-10" />
        </div>

        {/* Output */}
        <div
          className="flex-1 overflow-y-auto px-4 py-3 font-mono text-[13px] leading-relaxed sm:text-[13.5px]"
          data-lenis-prevent
        >
          {lines.map((l) => (
            <pre
              key={l.id}
              className={
                l.type === "banner"
                  ? "mb-2 overflow-x-auto whitespace-pre text-[7px] font-semibold leading-[1.15] tracking-tight text-sky-200 sm:text-[10px] md:text-[11px]"
                  : `whitespace-pre-wrap break-words ${typeColor[l.type] || typeColor.output}`
              }
            >
              {l.text}
            </pre>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input row */}
        <form
          onSubmit={onSubmit}
          className="flex items-center gap-2 border-t border-neutral-800 bg-[#0f0f0f] px-4 py-3 font-mono text-[13px] sm:text-[13.5px]"
        >
          <span className="shrink-0 text-orange-400">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            className="w-full bg-transparent text-neutral-100 outline-none caret-orange-400 placeholder:text-neutral-600"
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            placeholder="type a command…"
          />
        </form>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-neutral-800/80 bg-[#121212] px-4 py-1.5 font-mono text-[10px] text-neutral-500">
          <span>
            <span className="text-orange-500/80">●</span> connected
          </span>
          <span>Ctrl+` toggle · Esc close</span>
        </div>
      </div>
    </div>
  );
}
