import {
  Accordion,
  AccordionPassThroughMethodOptions,
  AccordionTab,
} from "primereact/accordion";
import { classNames } from "primereact/utils";

export default function PTDemo() {
  const tabs = [
    { title: "Header 1", content: "Tab 1 Content" },
    { title: "Header 2", content: "Tab 2 Content" },
    { title: "Header 3", content: "Tab 3 Content" },
  ];

  const panelClassName = (
    parent: AccordionPassThroughMethodOptions,
    index: number
  ) => {
    console.log(parent, index);
    if (parent.state.activeIndex === index) return "underline bg-red-500";
  };

  return (
    <div className="card">
      <Accordion activeIndex={0}>
        {tabs.map((tab, i) => {
          return (
            <AccordionTab
              key={i}
              pt={{
                headerAction: ({ parent }) => ({
                  className: panelClassName(parent, i),
                }),
              }}
              header={tab.title}
            >
              <p className="m-0">{tab.content}</p>
            </AccordionTab>
          );
        })}
      </Accordion>
    </div>
  );
}
