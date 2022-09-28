// components
import RouteItem from "./RouteItem";
import DocuementionSection from "./DocuementionSection";

const RouteList = () => {
  return (
    <div className="pt-2 pb-5 lg:py-0">
      <RouteItem
        hoverColor="group-hover:bg-pink-500"
        selectedColor="bg-pink-500"
        textColor="text-pink-500"
        icon="fa-solid fa-house"
        route="Home"
      />
      <RouteItem
        hoverColor="group-hover:bg-sky-400"
        selectedColor="bg-sky-400"
        textColor="text-sky-400"
        icon="fa-solid fa-book-open"
        route="Documention"
      />
      <RouteItem
        hoverColor="group-hover:bg-purple-400"
        selectedColor="bg-purple-400"
        textColor="text-purple-400"
        icon="fa-solid fa-cube"
        route="Components"
      />
      <RouteItem
        hoverColor="group-hover:bg-blue-500"
        selectedColor="bg-blue-500"
        textColor="text-blue-500"
        icon="fa-solid fa-paste"
        route="Templates"
      />
      <RouteItem
        hoverColor="group-hover:bg-red-400"
        selectedColor="bg-red-400"
        textColor="text-red-400"
        icon="fa-solid fa-circle-play"
        route="Media"
      />
      <RouteItem
        hoverColor="group-hover:bg-blue-400"
        selectedColor="bg-blue-400"
        textColor="text-blue-400"
        icon="fa-solid fa-code"
        route="Playground"
      />
      <RouteItem
        hoverColor="group-hover:bg-purple-400"
        selectedColor="bg-purple-400"
        textColor="text-purple-400"
        icon="fa-solid fa-folder-tree"
        route="Resources"
      />
      <RouteItem
        hoverColor="group-hover:bg-blue-500"
        selectedColor="bg-blue-500"
        textColor="text-blue-500"
        icon="fa-solid fa-comment-dots"
        route="Community"
      />
      <RouteItem
        hoverColor="group-hover:bg-red-500"
        selectedColor="bg-red-500"
        textColor="text-red-500"
        icon="fa-solid fa-briefcase"
        route="Jobs"
      />
      <DocuementionSection
        title="Getting Started"
        routes={[
          "Installation",
          "Editor Setup",
          "Using with Preprocessors",
          "Optimizing for Production",
          "Browser Support",
        ]}
      />
      <DocuementionSection
        title="Core Concepts"
        routes={[
          "Utility-First Fundamentals",
          "Responsive Design",
          "Dark Mode",
          "Reusing Styles",
          "Adding Custom Styles",
          "Functions & Directives",
        ]}
      />
      <DocuementionSection
        title="Customization"
        routes={[
          "Configuration",
          "Content",
          "Theme",
          "Colors",
          "Spacing",
          "Screens",
          "Plugins",
          "Presents",
        ]}
      />
      <DocuementionSection
        title="Layout"
        routes={[
          "Aspect Ratio",
          "Container",
          "Columns",
          "Box Sizing",
          "Display",
          "Object Fit",
          "Object Position",
          "Overflow",
          "Position",
          "Top Right Bottom Left",
          "Visibility",
          "Z Index",
        ]}
      />
    </div>
  );
};

export default RouteList;
