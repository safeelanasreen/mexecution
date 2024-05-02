import React from "react";
import ContactBanner from "./ContactBanner";
import FloatingMenu from "./FloatingMenu";
import StateInfrastructure from "./StateInfrastructure";
import SkilledLaborAccordion from "./SkilledLaborAccordion";
import StateIndustryTab from "./StateIndustryTab";
import StateLaborForce from "./StateLaborForce";
import UpcomingEvents from "./UpcomingEvents";
import StateFutureProjects from "./StateFutureProjects";
import StateMap from "./StateMap";
import LifeQuality from "./LifeQuality";
import StateBrands from "./StateBrands";
import StateIndustries from "./StateIndustries";

import StrategicalAdvantage from "./StrategicalAdvantage";
import GeneralinfoSwiper from "./GeneralinfoSwiper";
import GeneralInfoTab from "./GeneralInfoTab";
import StateGeneralInfo from "./StateGeneralInfo";
import StateFacts from "./StateFacts";
import TheState from "./TheState";
import MethodologySteps from "./MethodologySteps";
import MethodologySection from "./MethodologySection";
import TermCondition from "./TermCondition";
import PrivacyPolicy from "./PrivacyPolicy";
import ComingSoon from "./ComingSoon";
import LocationListingShimmer from "./LocationListingShimmer";
import AdminContentArea from "./AdminContentArea";
import FaqAccordion from "./FaqAccordion";
import FaqBanner from "./FaqBanner";
import BlogBlogs from "./BlogBlogs";
import PartnerCardShimmer from "./PartnerCardShimmer";
import BlogShimmer from "./BlogShimmer";
import ProjectCardShimmer from "./ProjectCardShimmer";
import HomeProblem from "./HomeProblem";
import Error404 from "./Error404";
import ContactForm from "./ContactForm";
import ContactBranch from "./ContactBranch";
import TabExecute from "./TabExecute";
import AboutTeam from "./AboutTeam";
import FeasibilityMap from "./FeasibilityMap";
import FeasibilityCatalog from "./FeasibilityCatalog";
import ServiceChooseLocation from "./ServiceChooseLocation";
import TimelineSlide from "./TimelineSlide";
import SupplierTab from "./SupplierTab";
import ServiceProduction from "./ServiceProduction";
import ServiceTransfer from "./ServiceTransfer";
import AboutValue from "./AboutValue";
import AboutVision from "./AboutVision";
import BusinesVideo from "./BusinesVideo";
import AboutMx from "./AboutMx";
import AboutOverview from "./AboutOverview";
import BlogFeatured from "./BlogFeatured";
import BlogDetail from "./BlogDetail";
import BlogListing from "./Bloglisting";
import IndustryDetailTab from "./IndustryDetailTab";
import HomeSolutions from "./HomeSolutions";
import RoundSliderWidget from "./RoundSliderWidget";
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
import LocationBanner from "./LocationBanner";
import LocationDetailContent from "./LocationDetailContent";
import SupplierMap from "./SupplierMap";
import ServiceBanner from "./ServiceBanner";
import ServiceLocalPartner from "./ServiceLocalPartner";
import ServicePartners from "./ServicePartners";
import ScrollSection from "./ScrollSection";
import ServiceExecution from "./ServiceExecution";
import ContentWidget from "./ContentWidget";
import FeasibilityPartner from "./FeasibilityPartner";
import FeasibilityVisit from "./FeasibilityVisit";
import FeasibilitySite from "./FeasibilitySite";
import FeasibilityOffer from "./FeasibilityOffer";
import HomeClients from "./HomeClients";
// import LocationBrands from "./LocationBrands";
import LocationManufacture from "./LocationManufacture";

const Components = {
  HomeClients,
  ContentWidget,
  ScrollSection,
  ServiceExecution,
  ServicePartners,
  ServiceLocalPartner,
  ServiceBanner,
  SupplierMap,
  LocationDetailContent,
  LocationDetailBanner,
  LocationContact,
  LocationOther,
  LocationListing,
  LocationBanner,
  // LocationBrands,
  LocationManufacture,
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
  IndustryDetailTab,
  BlogFeatured,
  BlogListing,
  BlogDetail,
  RoundSliderWidget,
  HomeSolutions,
  AboutOverview,
  AboutMx,
  BusinesVideo,
  AboutVision,
  AboutValue,
  FeasibilityCatalog,
  FeasibilityMap,
  ServiceTransfer,
  ServiceProduction,
  SupplierTab,
  ServiceChooseLocation,
  TimelineSlide,
  AboutTeam,
  TabExecute,
  ContactBranch,
  ContactForm,
  Error404,
  HomeProblem,
  ProjectCardShimmer,
  BlogShimmer,
  PartnerCardShimmer,
  BlogBlogs,
  FaqBanner,
  FaqAccordion,
  AdminContentArea,
  LocationListingShimmer,
  ComingSoon,
  PrivacyPolicy,
  TermCondition,
 MethodologySection,
 MethodologySteps,
 TheState,
 undefined,
 StateFacts,
 StateGeneralInfo,
 GeneralInfoTab,
 GeneralinfoSwiper,
 StrategicalAdvantage,
 StateIndustries,
 StateBrands,
 LifeQuality,
 UpcomingEvents,

 StateLaborForce,
 StateMap,
 StateFutureProjects,
 StateIndustryTab,
 SkilledLaborAccordion,
 StateInfrastructure,
 FloatingMenu,
 ContactBanner,
};

const ComponentFunc = (block) => {
  if (typeof Components[block.slug] !== "undefined") {
    return React.createElement(Components[block.slug], {
      key: Math.random(),
      props: block,
    });
  }
  return React.createElement(
    () => <div>The component {block.slug} has not been created yet.</div>,
    { key: Math.random() }
  );
};
export default ComponentFunc;
