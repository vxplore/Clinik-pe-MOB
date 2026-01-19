import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import whitemapicon from "../../.././assets/whitemap.svg";
interface DetailItem {
  label: string;
  value: string | number;
  color?: string;
}

interface Section {
  title: string;
  items: DetailItem[];
  hasLocation?: boolean;
}

interface ExpandableDetailsProps {
  title: string;
  sections: Section[];
  defaultOpen?: boolean;
  onLocationClick?: () => void;
}

function ExpandableDetails({
  title,
  sections,
  defaultOpen = true,
  onLocationClick,
}: ExpandableDetailsProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [height, setHeight] = useState<number | undefined>(
    defaultOpen ? undefined : 0
  );
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        if (height === undefined) {
          setHeight(contentRef.current.scrollHeight);
          requestAnimationFrame(() => {
            setHeight(0);
          });
        } else {
          setHeight(0);
        }
      }
    }
  }, [open, height]);

  const handleTransitionEnd = () => {
    if (open && contentRef.current) {
      setHeight(undefined);
    }
  };

  return (
    <div className="bg-white rounded-lg">
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-0"
      >
        <span className="text-base font-semibold text-gray-500 tracking-wide">
          {title}
        </span>
        <div className="p-1 rounded-full bg-gray-50 hover:bg-gray-100">
          <ChevronDown
            size={20}
            className={`text-gray-500 transition-transform duration-300 ease-out ${
              open ? "rotate-180" : ""
            }`}
            style={{ willChange: "transform" }}
          />
        </div>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          height: height,
          overflow: "hidden",
          transition: "height 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "height",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="px-4 pb-3 space-y-4">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="text-xs font-semibold text-gray-500 tracking-wide mb-3">
                {section.title}
              </h3>
              {section.hasLocation ? (
                <div className="flex justify-between items-start gap-3">
                  <div className="space-y-1">
                    {section.items.map((item, idx) => (
                      <div key={idx}>
                        <p className="text-gray-700">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div
                    onClick={onLocationClick}
                    className="px-4 py-3 rounded-lg bg-primary hover:bg-primary-dark transition-colors flex-shrink-0 cursor-pointer"
                    aria-label="View location"
                  >
                    <img
                      className="w-5 h-5"
                      src={whitemapicon}
                      alt="Map icon"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-sm">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-500">{item.label}</span>
                      <span
                        className={`font-semibold ${
                          item.color === "green"
                            ? "text-green-600"
                            : item.color === "red"
                            ? "text-red-600"
                            : "text-gray-900"
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {sectionIdx < sections.length - 1 && (
                <div className="border-t border-gray-200 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpandableDetails;
