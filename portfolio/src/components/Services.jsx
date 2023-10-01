import Wrapper from "../wrappers/Services";
import ServiceSection from "./ServiceSection";
import services from "../Utils/services";

const Services = () => {
  return (
    <Wrapper>
      <h1>What Do I Offer?</h1>
      {services.map((service) => {
        return (
          <ServiceSection
            title={service.title}
            icon={service.icon}
            description={service.description}
            examples={service.examples}
          />
        );
      })}
      <ServiceSection />
    </Wrapper>
  );
};
export default Services;
