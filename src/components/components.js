import React from "react";
import AboutMx from "./AboutMx";
import AboutValue from "./AboutValue";
import AboutVision from "./AboutVision";
import BusinesVideo from "./BusinesVideo";
import AboutOverview from "./AboutOverview";
import Career from "./Career";
import HomeBanner from "./HomeBanner";
import HomeAbout from "./HomeAbout";
import HomeFaq from "./HomeFaq";
import HomeFeatures from "./HomeFeatures";
import HomeOwner from "./HomeOwner";
import HomePartners from "./HomePartners";
import HomeWorks from "./HomeWorks";
import HomeLocation from "./HomeLocation";
import HomeServices from "./HomeServices";
import HomeProcess from "./HomeProcess";
import HomeIndustries from "./HomeIndustries";
import HomeBlog from "./HomeBlog";
import HomeReason from "./HomeReason";
import HomeEco from "./HomeEco";
import LocationListing from "./LocationListing";
import LocationOther from "./LocationOther";
import LocationContact from "./LocationContact";
import LocationDetailBanner from "./LocationDetailBanner";
import LocationDetailContent from "./LocationDetailContent";
import ServiceBanner from "./ServiceBanner";
import ServiceExecution from "./ServiceExecution";
import ServiceLocalPartner from "./ServiceLocalPartner";
import ServicePartners from "./ServicePartners";
import ServiceTransfer from "./ServiceTransfer";
import ServiceProduction from "./ServiceProduction";
import SupplierTab from "./SupplierTab";
import ContentWidget from "./ContentWidget";
import FeasibilityPartner from "./FeasibilityPartner";
import FeasibilityVisit from "./FeasibilityVisit";
import FeasibilitySite from "./FeasibilitySite";
import FeasibilityOffer from "./FeasibilityOffer";
import FeasibilityCatalog from "./FeasibilityCatalog";
import FeasibilityMap from "./FeasibilityMap";
import AboutTeam from "./AboutTeam";
import TabExecute from "./TabExecute";
import SupplierMap from "./SupplierMap";
import AdminContentArea from "./AdminContentArea";
import MethodologySection from "./MethodologySection";
import MethodologySteps from "./MethodologySteps";
import TheState from "./TheState";
import StateFacts from "./StateFacts";
import StateGeneralInfo from "./StateGeneralInfo";
import GeneralInfoTab from "./GeneralInfoTab";
import StateIndustries from "./StateIndustries";
import StateMap from "./StateMap";
import StateBrands from "./StateBrands";
import StrategicalAdvantage from "./StrategicalAdvantage";
import UpcomingEvents from "./UpcomingEvents";
import StateInfrastructure from "./StateInfrastructure";
import StateLaborForce from "./StateLaborForce";
import StateFutureProjects from "./StateFutureProjects";
import LifeQuality from "./LifeQuality";

const Components = {
  LifeQuality,
  StateFutureProjects,
  StateLaborForce,
  StateInfrastructure,
  UpcomingEvents,
  StrategicalAdvantage,
  StateIndustries,
  StateMap,
  StateBrands,
  GeneralInfoTab,
  StateGeneralInfo,
  StateFacts,
  TheState,
  MethodologySteps,
  MethodologySection,
  SupplierMap,
  TabExecute,
  AboutTeam,
  FeasibilityMap,
  FeasibilityCatalog,
  ContentWidget,
  ServiceExecution,
  ServicePartners,
  ServiceTransfer,
  ServiceLocalPartner,
  ServiceBanner,
  LocationDetailContent,
  LocationDetailBanner,
  LocationContact,
  LocationOther,
  LocationListing,
  HomeEco,
  HomeReason,
  HomeProcess,
  HomeIndustries,
  HomeServices,
  HomeLocation,
  HomeWorks,
  HomePartners,
  HomeOwner,
  HomeFeatures,
  HomeFaq,
  HomeBanner,
  HomeAbout,
  HomeBlog,
  Career,
  FeasibilityPartner,
  FeasibilityVisit,
  FeasibilitySite,
  FeasibilityOffer,
  AboutOverview,
  AboutMx,
  BusinesVideo,
  AboutVision,
  AboutValue,
  ServiceProduction,
  SupplierTab,
  AdminContentArea,
};

const ComponentFunc = (block) => {
  if (typeof Components[block.slug] !== "undefined") {
    return React.createElement(Components[block.slug], {
      key: `${block.slug}${block?.sectionId}`,
      props: block,
    });
  }
  return React.createElement(
    () => <div>The component {block.slug} has not been created yet.</div>,
    { key: Math.random() }
  );
};
export default ComponentFunc;
