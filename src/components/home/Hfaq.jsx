import React from "react";
import Faq from "react-faq-component";
import Heading from "../common/heading/Heading";
import "./faq.css"; // Import the CSS file

const data = {
    
  title: "",
  rows: [
    {
      title: "What is the water footprint?",
      content: `
      The water footprint encompasses the total amount of freshwater used, directly and indirectly, in the production of goods and services by individuals, communities, or nations. It includes green, blue, and grey components, which represent different sources and uses of water.`,
    },
    {
      title: "What is the difference between direct and indirect water use?",
      content:
        " Direct water use refers to the consumption of water for specific purposes immediately identifiable to the user, such as drinking, cooking, and sanitation. Indirect water use, on the other hand, involves water used in the production of goods and services but may not be immediately apparent to the end consumer. This includes water used in agriculture, industry, and energy production.",
    },
    {
      title: "What are the types of water footprint?",
      content: `The water footprint can be classified into blue, green, and grey water footprints based on the source of water supply. Blue water footprint represents surface water and groundwater consumption, green water footprint refers to rainwater used in crop growth, and grey water footprint involves water required to dilute polluted water to meet quality standards.`,
    },
    {
      title: "How is national/state water footprint calculated?",
      content: `The national/state water footprint is determined by summing up the total volume of freshwater consumed directly and indirectly within the nation or state boundaries. This includes both water used within the nation/state and virtual water embedded in imported goods and services, minus virtual water exported.`,
    },
    {
      title: "What are the applications of water footprint analysis?",
      content: `Water footprint analysis can assess water consumption patterns and their environmental impacts, understand dependency on foreign water resources, evaluate the sustainability of water consumption patterns, aid companies in assessing water use in their supply chains, and inform policymakers and stakeholders about opportunities for water conservation and sustainable management practices.
`,
    },
  ],
};

const styles = {
  titleTextColor: "black",
  rowTitleColor: "black",
};

const config = {
  animate: true,
  tabFocus: true,
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};

const FAQ = () => {
  return (
    <div className="faq-container">
        <Heading subtitle="FAQ's" title="Some commonly Discussed FAQ's" />
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default FAQ;
