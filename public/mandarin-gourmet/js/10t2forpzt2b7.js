;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="a966f902-2b85-2ab5-ce85-c94c437cee03")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,409501,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.r(905997).__exportStar(e.r(729535),t)},596983,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CxDropoffPreferenceToJSON=t.CxDropoffPreferenceFromJSONTyped=t.CxDropoffPreferenceFromJSON=t.instanceOfCxDropoffPreference=void 0;let n=e.r(409501);function s(e,r){return null==e?e:{optionId:(0,n.exists)(e,"option_id")?e.option_id:void 0,instructions:(0,n.exists)(e,"instructions")?e.instructions:void 0,isDefault:(0,n.exists)(e,"is_default")?e.is_default:void 0}}t.instanceOfCxDropoffPreference=function(e){return!0},t.CxDropoffPreferenceFromJSON=function(e){return s(e,!1)},t.CxDropoffPreferenceFromJSONTyped=s,t.CxDropoffPreferenceToJSON=function(e){if(void 0!==e)return null===e?null:{option_id:e.optionId,instructions:e.instructions,is_default:e.isDefault}}},830103,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PersonalAddressLabelV1PersonalAddressLabelLabelIconToJSON=t.PersonalAddressLabelV1PersonalAddressLabelLabelIconFromJSONTyped=t.PersonalAddressLabelV1PersonalAddressLabelLabelIconFromJSON=t.PersonalAddressLabelV1PersonalAddressLabelLabelIcon=void 0,t.PersonalAddressLabelV1PersonalAddressLabelLabelIcon={Unspecified:"LABEL_ICON_TYPE_UNSPECIFIED",Pin:"LABEL_ICON_TYPE_PIN",Home:"LABEL_ICON_TYPE_HOME",Work:"LABEL_ICON_TYPE_WORK",UnknownDefaultOpenApi:"11184809"};t.PersonalAddressLabelV1PersonalAddressLabelLabelIconFromJSON=function(e){return e},t.PersonalAddressLabelV1PersonalAddressLabelLabelIconFromJSONTyped=function(e,r){return e},t.PersonalAddressLabelV1PersonalAddressLabelLabelIconToJSON=function(e){return e}},478351,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PersonalAddressLabelV1PersonalAddressLabelToJSON=t.PersonalAddressLabelV1PersonalAddressLabelFromJSONTyped=t.PersonalAddressLabelV1PersonalAddressLabelFromJSON=t.instanceOfPersonalAddressLabelV1PersonalAddressLabel=void 0;let n=e.r(409501),s=e.r(830103);function i(e,r){return null==e?e:{labelIcon:(0,s.PersonalAddressLabelV1PersonalAddressLabelLabelIconFromJSON)(e.label_icon),labelName:(0,n.exists)(e,"label_name")?e.label_name:void 0}}t.instanceOfPersonalAddressLabelV1PersonalAddressLabel=function(e){return"labelIcon"in e},t.PersonalAddressLabelV1PersonalAddressLabelFromJSON=function(e){return i(e,!1)},t.PersonalAddressLabelV1PersonalAddressLabelFromJSONTyped=i,t.PersonalAddressLabelV1PersonalAddressLabelToJSON=function(e){if(void 0!==e)return null===e?null:{label_icon:(0,s.PersonalAddressLabelV1PersonalAddressLabelLabelIconToJSON)(e.labelIcon),label_name:e.labelName}}},497513,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CxDefaultAddressToJSON=t.CxDefaultAddressFromJSONTyped=t.CxDefaultAddressFromJSON=t.instanceOfCxDefaultAddress=void 0;let n=e.r(409501),s=e.r(596983),i=e.r(478351);function a(e,r){return null==e?e:{addressId:(0,n.exists)(e,"address_id")?e.address_id:void 0,lat:(0,n.exists)(e,"lat")?e.lat:void 0,lng:(0,n.exists)(e,"lng")?e.lng:void 0,locality:(0,n.exists)(e,"locality")?e.locality:void 0,districtId:(0,n.exists)(e,"district_id")?e.district_id:void 0,subpremise:(0,n.exists)(e,"subpremise")?e.subpremise:void 0,buildingName:(0,n.exists)(e,"building_name")?e.building_name:void 0,entryCode:(0,n.exists)(e,"entry_code")?e.entry_code:void 0,street:(0,n.exists)(e,"street")?e.street:void 0,timezone:(0,n.exists)(e,"timezone")?e.timezone:void 0,printableAddress:(0,n.exists)(e,"printable_address")?e.printable_address:void 0,administrativeAreaLevel1:(0,n.exists)(e,"administrative_area_level_1")?e.administrative_area_level_1:void 0,administrativeAreaLevel2:(0,n.exists)(e,"administrative_area_level_2")?e.administrative_area_level_2:void 0,country:(0,n.exists)(e,"country")?e.country:void 0,countryShortname:(0,n.exists)(e,"country_shortname")?e.country_shortname:void 0,submarketId:(0,n.exists)(e,"submarket_id")?e.submarket_id:void 0,driverInstructions:(0,n.exists)(e,"driver_instructions")?e.driver_instructions:void 0,dropoffPreferences:(0,n.exists)(e,"dropoff_preferences")?null===e.dropoff_preferences?null:e.dropoff_preferences.map(s.CxDropoffPreferenceFromJSON):void 0,postalCode:(0,n.exists)(e,"postal_code")?e.postal_code:void 0,personalAddressLabel:(0,n.exists)(e,"personal_address_label")?(0,i.PersonalAddressLabelV1PersonalAddressLabelFromJSON)(e.personal_address_label):void 0,formattedAddressSegmentedList:(0,n.exists)(e,"formatted_address_segmented_list")?e.formatted_address_segmented_list:void 0,formattedAddressSegmentedNonUserEditableFieldsList:(0,n.exists)(e,"formatted_address_segmented_non_user_editable_fields_list")?e.formatted_address_segmented_non_user_editable_fields_list:void 0,shortName:(0,n.exists)(e,"short_name")?e.short_name:void 0,id:(0,n.exists)(e,"id")?e.id:void 0}}t.instanceOfCxDefaultAddress=function(e){return!0},t.CxDefaultAddressFromJSON=function(e){return a(e,!1)},t.CxDefaultAddressFromJSONTyped=a,t.CxDefaultAddressToJSON=function(e){if(void 0!==e)return null===e?null:{address_id:e.addressId,lat:e.lat,lng:e.lng,locality:e.locality,district_id:e.districtId,subpremise:e.subpremise,building_name:e.buildingName,entry_code:e.entryCode,street:e.street,timezone:e.timezone,printable_address:e.printableAddress,administrative_area_level_1:e.administrativeAreaLevel1,administrative_area_level_2:e.administrativeAreaLevel2,country:e.country,country_shortname:e.countryShortname,submarket_id:e.submarketId,driver_instructions:e.driverInstructions,dropoff_preferences:void 0===e.dropoffPreferences?void 0:null===e.dropoffPreferences?null:e.dropoffPreferences.map(s.CxDropoffPreferenceToJSON),postal_code:e.postalCode,personal_address_label:(0,i.PersonalAddressLabelV1PersonalAddressLabelToJSON)(e.personalAddressLabel),formatted_address_segmented_list:e.formattedAddressSegmentedList,formatted_address_segmented_non_user_editable_fields_list:e.formattedAddressSegmentedNonUserEditableFieldsList,short_name:e.shortName,id:e.id}}},29347,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CxProofOfDeliveryTypeToJSON=t.CxProofOfDeliveryTypeFromJSONTyped=t.CxProofOfDeliveryTypeFromJSON=t.CxProofOfDeliveryType=void 0,t.CxProofOfDeliveryType={Unspecified:"PROOF_OF_DELIVERY_TYPE_UNSPECIFIED",Signature:"PROOF_OF_DELIVERY_TYPE_SIGNATURE",PinCode:"PROOF_OF_DELIVERY_TYPE_PIN_CODE",None:"PROOF_OF_DELIVERY_TYPE_NONE",UnknownDefaultOpenApi:"11184809"};t.CxProofOfDeliveryTypeFromJSON=function(e){return e},t.CxProofOfDeliveryTypeFromJSONTyped=function(e,r){return e},t.CxProofOfDeliveryTypeToJSON=function(e){return e}},735435,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CxDropoffOptionToJSON=t.CxDropoffOptionFromJSONTyped=t.CxDropoffOptionFromJSON=t.instanceOfCxDropoffOption=void 0;let n=e.r(409501),s=e.r(29347);function i(e,r){return null==e?e:{id:(0,n.exists)(e,"id")?e.id:void 0,displayString:(0,n.exists)(e,"display_string")?e.display_string:void 0,isDefault:(0,n.exists)(e,"is_default")?e.is_default:void 0,isEnabled:(0,n.exists)(e,"is_enabled")?e.is_enabled:void 0,placeholderText:(0,n.exists)(e,"placeholder_text")?e.placeholder_text:void 0,disabledMessage:(0,n.exists)(e,"disabled_message")?e.disabled_message:void 0,proofOfDeliveryType:(0,n.exists)(e,"proof_of_delivery_type")?(0,s.CxProofOfDeliveryTypeFromJSON)(e.proof_of_delivery_type):void 0}}t.instanceOfCxDropoffOption=function(e){return!0},t.CxDropoffOptionFromJSON=function(e){return i(e,!1)},t.CxDropoffOptionFromJSONTyped=i,t.CxDropoffOptionToJSON=function(e){if(void 0!==e)return null===e?null:{id:e.id,display_string:e.displayString,is_default:e.isDefault,is_enabled:e.isEnabled,placeholder_text:e.placeholderText,disabled_message:e.disabledMessage,proof_of_delivery_type:(0,s.CxProofOfDeliveryTypeToJSON)(e.proofOfDeliveryType)}}},635065,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CxPhoneNumberComponentsToJSON=t.CxPhoneNumberComponentsFromJSONTyped=t.CxPhoneNumberComponentsFromJSON=t.instanceOfCxPhoneNumberComponents=void 0;let n=e.r(409501);function s(e,r){return null==e?e:{formattedNationalNumber:(0,n.exists)(e,"formatted_national_number")?e.formatted_national_number:void 0,nationalNumber:(0,n.exists)(e,"national_number")?e.national_number:void 0,formattedInternationalNumber:(0,n.exists)(e,"formatted_international_number")?e.formatted_international_number:void 0,countryCode:(0,n.exists)(e,"country_code")?e.country_code:void 0,internationalNumber:(0,n.exists)(e,"international_number")?e.international_number:void 0,countryShortname:(0,n.exists)(e,"country_shortname")?e.country_shortname:void 0}}t.instanceOfCxPhoneNumberComponents=function(e){return!0},t.CxPhoneNumberComponentsFromJSON=function(e){return s(e,!1)},t.CxPhoneNumberComponentsFromJSONTyped=s,t.CxPhoneNumberComponentsToJSON=function(e){if(void 0!==e)return null===e?null:{formatted_national_number:e.formattedNationalNumber,national_number:e.nationalNumber,formatted_international_number:e.formattedInternationalNumber,country_code:e.countryCode,international_number:e.internationalNumber,country_shortname:e.countryShortname}}},295382,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NamesLocalizedNamesToJSON=t.NamesLocalizedNamesFromJSONTyped=t.NamesLocalizedNamesFromJSON=t.instanceOfNamesLocalizedNames=void 0;let n=e.r(409501);function s(e,r){return null==e?e:{informalName:(0,n.exists)(e,"informal_name")?e.informal_name:void 0,formalName:(0,n.exists)(e,"formal_name")?e.formal_name:void 0,formalNameAbbreviated:(0,n.exists)(e,"formal_name_abbreviated")?e.formal_name_abbreviated:void 0,shortName:(0,n.exists)(e,"short_name")?e.short_name:void 0,fullPrivatizedName:(0,n.exists)(e,"full_privatized_name")?e.full_privatized_name:void 0,fullName:(0,n.exists)(e,"full_name")?e.full_name:void 0}}t.instanceOfNamesLocalizedNames=function(e){return!0},t.NamesLocalizedNamesFromJSON=function(e){return s(e,!1)},t.NamesLocalizedNamesFromJSONTyped=s,t.NamesLocalizedNamesToJSON=function(e){if(void 0!==e)return null===e?null:{informal_name:e.informalName,formal_name:e.formalName,formal_name_abbreviated:e.formalNameAbbreviated,short_name:e.shortName,full_privatized_name:e.fullPrivatizedName,full_name:e.fullName}}},995670,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CxGetConsumerResponseToJSON=t.CxGetConsumerResponseFromJSONTyped=t.CxGetConsumerResponseFromJSON=t.instanceOfCxGetConsumerResponse=void 0;let n=e.r(409501),s=e.r(497513),i=e.r(735435),a=e.r(635065),o=e.r(295382);function d(e,r){return null==e?e:{id:(0,n.exists)(e,"id")?e.id:void 0,userId:(0,n.exists)(e,"user_id")?e.user_id:void 0,isGuest:(0,n.exists)(e,"is_guest")?e.is_guest:void 0,email:(0,n.exists)(e,"email")?e.email:void 0,firstName:(0,n.exists)(e,"first_name")?e.first_name:void 0,lastName:(0,n.exists)(e,"last_name")?e.last_name:void 0,localizedNames:(0,n.exists)(e,"localized_names")?(0,o.NamesLocalizedNamesFromJSON)(e.localized_names):void 0,phoneNumber:(0,n.exists)(e,"phone_number")?e.phone_number:void 0,phoneNumberComponents:(0,n.exists)(e,"phone_number_components")?(0,a.CxPhoneNumberComponentsFromJSON)(e.phone_number_components):void 0,scheduledDeliveryTime:(0,n.exists)(e,"scheduled_delivery_time")?e.scheduled_delivery_time:void 0,defaultAddress:(0,n.exists)(e,"default_address")?(0,s.CxDefaultAddressFromJSON)(e.default_address):void 0,isDistrictActive:(0,n.exists)(e,"is_district_active")?e.is_district_active:void 0,marketId:(0,n.exists)(e,"market_id")?e.market_id:void 0,timezone:(0,n.exists)(e,"timezone")?e.timezone:void 0,dropoffOptions:(0,n.exists)(e,"dropoff_options")?null===e.dropoff_options?null:e.dropoff_options.map(i.CxDropoffOptionFromJSON):void 0,defaultCountry:(0,n.exists)(e,"default_country")?e.default_country:void 0}}t.instanceOfCxGetConsumerResponse=function(e){return!0},t.CxGetConsumerResponseFromJSON=function(e){return d(e,!1)},t.CxGetConsumerResponseFromJSONTyped=d,t.CxGetConsumerResponseToJSON=function(e){if(void 0!==e)return null===e?null:{id:e.id,user_id:e.userId,is_guest:e.isGuest,email:e.email,first_name:e.firstName,last_name:e.lastName,localized_names:(0,o.NamesLocalizedNamesToJSON)(e.localizedNames),phone_number:e.phoneNumber,phone_number_components:(0,a.CxPhoneNumberComponentsToJSON)(e.phoneNumberComponents),scheduled_delivery_time:e.scheduledDeliveryTime,default_address:(0,s.CxDefaultAddressToJSON)(e.defaultAddress),is_district_active:e.isDistrictActive,market_id:e.marketId,timezone:e.timezone,dropoff_options:void 0===e.dropoffOptions?void 0:null===e.dropoffOptions?null:e.dropoffOptions.map(i.CxDropoffOptionToJSON),default_country:e.defaultCountry}}},949735,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=e.r(905997);n.__exportStar(e.r(497513),t),n.__exportStar(e.r(735435),t),n.__exportStar(e.r(596983),t),n.__exportStar(e.r(995670),t),n.__exportStar(e.r(635065),t),n.__exportStar(e.r(29347),t),n.__exportStar(e.r(295382),t),n.__exportStar(e.r(478351),t),n.__exportStar(e.r(830103),t)},941528,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultApi=void 0;let n=e.r(905997),s=n.__importStar(e.r(409501)),i=e.r(949735);class a extends s.BaseAPI{constructor(){super(...arguments),this.modelgenHeaders={"x-unified-gateway-generated-source":"v1"}}getCxClientPlatformV1ConsumerRaw(e,r){return n.__awaiter(this,void 0,void 0,function*(){let t={};void 0!==e.consumerId&&(t.consumer_id=e.consumerId);let n=yield this.request({path:"/cx-client-platform/v1/consumer",route:"/cx-client-platform/v1/consumer",method:"GET",headers:{},query:t},r);return new s.JSONApiResponse(n,e=>(0,i.CxGetConsumerResponseFromJSON)(e))})}getCxClientPlatformV1Consumer(e={},r){return n.__awaiter(this,void 0,void 0,function*(){let t=yield this.getCxClientPlatformV1ConsumerRaw(e,r);return yield t.value()})}}t.DefaultApi=a},871258,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.r(905997).__exportStar(e.r(941528),t)},655139,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=e.r(905997),s=e.r(941528);n.__exportStar(e.r(409501),t),n.__exportStar(e.r(871258),t),n.__exportStar(e.r(949735),t),t.default=s.DefaultApi},442720,(e,r,t)=>{r.exports=function(e,r,t){switch(t.length){case 0:return e.call(r);case 1:return e.call(r,t[0]);case 2:return e.call(r,t[0],t[1]);case 3:return e.call(r,t[0],t[1],t[2])}return e.apply(r,t)}},265306,(e,r,t)=>{var n=e.r(442720),s=Math.max;r.exports=function(e,r,t){return r=s(void 0===r?e.length-1:r,0),function(){for(var i=arguments,a=-1,o=s(i.length-r,0),d=Array(o);++a<o;)d[a]=i[r+a];a=-1;for(var l=Array(r+1);++a<r;)l[a]=i[a];return l[r]=t(d),n(e,this,l)}}},64503,(e,r,t)=>{r.exports=function(e){return function(){return e}}},220561,(e,r,t)=>{var n=e.r(64503),s=e.r(428841),i=e.r(317466);r.exports=s?function(e,r){return s(e,"toString",{configurable:!0,enumerable:!1,value:n(r),writable:!0})}:i},510079,(e,r,t)=>{var n=Date.now;r.exports=function(e){var r=0,t=0;return function(){var s=n(),i=16-(s-t);if(t=s,i>0){if(++r>=800)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}},728528,(e,r,t)=>{var n=e.r(220561);r.exports=e.r(510079)(n)},914025,(e,r,t)=>{var n=e.r(317466),s=e.r(265306),i=e.r(728528);r.exports=function(e,r){return i(s(e,r,n),e+"")}},583011,(e,r,t)=>{var n=e.r(676325),s=e.r(113167),i=e.r(908726),a=e.r(924653);r.exports=function(e,r,t){if(!a(t))return!1;var o=typeof r;return("number"==o?!!(s(t)&&i(r,t.length)):"string"==o&&r in t)&&n(t[r],e)}},829456,(e,r,t)=>{var n=e.r(914025),s=e.r(676325),i=e.r(583011),a=e.r(793548),o=Object.prototype,d=o.hasOwnProperty;r.exports=n(function(e,r){e=Object(e);var t=-1,n=r.length,l=n>2?r[2]:void 0;for(l&&i(r[0],r[1],l)&&(n=1);++t<n;)for(var u=r[t],m=a(u),c=-1,f=m.length;++c<f;){var p=m[c],_=e[p];(void 0===_||s(_,o[p])&&!d.call(e,p))&&(e[p]=u[p])}return e})},800898,e=>{"use strict";var r=e.i(829456);e.s(["defaultConsumerData",0,e=>{let t=e?.consumer||{};return(0,r.default)(t,{isGuest:!0,timezone:"US/Pacific",scheduledDeliveryTime:"ASAP",activeSubscription:{subscriptionStatus:"does_not_exist"}}),t}])},317466,(e,r,t)=>{r.exports=function(e){return e}},418456,e=>{"use strict";var r=e.i(133101);e.s(["useConsumerQuery",0,function(e,t){return(0,r.useConsumerQuery)(e,t)}])},423258,e=>{"use strict";var r=e.i(725601);let t=r.gql`
  fragment BadgeFragment on Badge {
    isDashpass
    type
    text
    backgroundColor
    styleType
    dlsTagSize
    dlsTextStyle
    dlsTagStyle
    dlsTagType
    placement
    leadingIcon
    leadingIconSize
    trailingIcon
    trailingIconSize
    endTime
    dlsTextColor
    brandedDecorator {
      prefixText
      postfixText
      postfixTextLeadingIcon
    }
    trailingText {
      copy
      dlsTextStyle
      dlsTextColor
    }
    onClick
    prismComponentThemeOverride
  }
`;e.s(["badgeFragment",0,t])},308635,e=>{"use strict";var r=e.i(725601);let t=r.gql`
  fragment DefaultAddressFragment on DefaultAddress {
    id
    addressId
    street
    city
    subpremise
    state
    zipCode
    country
    countryCode
    lat
    lng
    districtId
    # Consumer-provided custom latitude for their address
    manualLat
    # Consumer-provided custom longitude for their address
    manualLng
    timezone
    shortname
    printableAddress
    driverInstructions
    dropoffPreferences {
      allPreferences {
        optionId
        isDefault
        instructions
      }
    }
    buildingName
    entryCode
    addressLinkType
    personalAddressLabel {
      labelIcon
      labelName
    }
    formattedAddressSegmentedList
    formattedAddressSegmentedNonUserEditableFieldsList
  }
`;e.s(["defaultAddressFragment",0,t])},992223,e=>{"use strict";var r=e.i(725601),t=e.i(518337),n=e.i(308635);let s=r.gql`
  fragment SubscriptionFragment on Subscription {
    subscriptionStatus
    id
    subscriptionPlan {
      isPartnerPlan
      id
      numEligibleStores
    }
  }
`,i=r.gql`
  fragment ConsumerFragment on Consumer {
    id
    userId
    timezone
    firstName
    lastName
    localizedNames {
      informalName
      formalName
      formalNameAbbreviated
    }
    email
    marketId
    phoneNumber
    defaultCountry
    isGuest
    scheduledDeliveryTime
    # dropoff options
    dropoffOptions {
      id
      displayString
      isDefault
      isEnabled
      placeholderText
      disabledMessage
    }
    phoneNumberComponents {
      formattedNationalNumber
      nationalNumber
      formattedInternationalNumber
      countryCode
      internationalNumber
      countryShortname
    }
    availableAddresses {
      id
      addressId
      street
      city
      subpremise
      state
      zipCode
      country
      countryCode
      lat
      lng
      districtId
      manualLat
      manualLng
      timezone
      shortname
      printableAddress
      driverInstructions
      dropoffPreferences {
        allPreferences {
          optionId
          isDefault
          instructions
        }
      }
      buildingName
      entryCode
      addressLinkType
      personalAddressLabel {
        labelIcon
        labelName
      }
      formattedAddressSegmentedList
      formattedAddressSegmentedNonUserEditableFieldsList
    }
    defaultAddress {
      ...DefaultAddressFragment
      # adding submarket fields here instead of in the above fragment for now to avoid propagating this field in more places than needed
      submarket
      submarketId
    }
    districtAvailability {
      isDistrictActive
    }
    orderCart {
      ...ConsumerOrderCartFragment
    }
    activeSubscription {
      ...SubscriptionFragment
    }
  }
  ${n.defaultAddressFragment}
  ${t.consumerOrderCartFragment}
  ${s}
`;e.s(["consumerFragment",0,i])},220647,e=>{"use strict";var r=e.i(992223),t=e.i(725601);let n=t.gql`
  query consumer {
    consumer {
      ...ConsumerFragment
    }
  }
  ${r.consumerFragment}
`;e.s(["consumerQuery",0,n])},699018,e=>{"use strict";var r=e.i(725601);let t=r.gql`
  fragment InvalidItemsFragment on OrderCart {
    invalidItems {
      itemId
      storeId
      itemQuantityInfo {
        discreteQuantity {
          quantity
          unit
        }
        continuousQuantity {
          quantity
          unit
        }
      }
      name
      itemExtrasList
      menuId
    }
  }
`;e.s(["invalidItemsFragment",0,t])},53797,e=>{"use strict";var r=e.i(725601);let t=r.gql`
  fragment OrderItemBundleFragment on OrderItemBundleStore {
    id
    name
    businessId
    isPrimary
    isRetail
  }
`;e.s(["OrderItemBundleFragment",0,t])},33306,e=>{"use strict";var r=e.i(725601),t=e.i(423258);let n=r.gql`
  fragment DiscountAdsMetadataFragment on AdsMetadata {
    campaignId
    adGroupId
    auctionId
  }
`,s=r.gql`
  fragment DiscountMonetaryFieldsFragment on AmountMonetaryFields {
    currency
    displayString
    decimalPlaces
    unitAmount
    sign
  }
`,i=r.gql`
  fragment OrderItemDiscountFragment on OrderItemDiscount {
    id
    finalMoney {
      ...DiscountMonetaryFieldsFragment
    }
    badges {
      ...BadgeFragment
    }
    adsMetadata {
      ...DiscountAdsMetadataFragment
    }
    finalMoneyDisplayStyle {
      textColor
    }
  }
  ${s}
  ${t.badgeFragment}
  ${n}
`;e.s(["OrderItemDiscountFragment",0,i])},191237,e=>{"use strict";var r=e.i(725601);let t=r.gql`
  fragment CartItemGiftInfoFragment on CartItemGiftInfo {
    recipientName
    recipientPhone
    recipientEmail
    cardMessage
    senderName
    imageId
    imageUrl
    deliveryChannel
  }
`;e.s(["CartItemGiftInfoFragment",0,t])},473303,e=>{"use strict";var r=e.i(725601);let t=r.gql`
  fragment CheckoutOrderTimeAvailabilityFragment on OrderTimeAvailability {
    scheduleLongerInAdvanceTime
    timezone
    days {
      year
      month
      date
      times {
        display
        timestamp
        min
        max
        displayString
        displayStringDeliveryWindow
        displayStringSubtitle
      }
      title
      subtitle
      isSelected
      isDisabled
    }
  }
`;e.s(["checkoutOrderTimeAvailabilityFragment",0,t])},533969,e=>{"use strict";var r=e.i(725601);let t=r.gql`
  fragment NudgeFragment on Nudge {
    nudgeMessage {
      text
      icon
      color
      textStyle
    }
    progress
    collectionModalDeeplink
  }
`,n=r.gql`
  fragment PromoNudgeFragment on PromoNudge {
    ... on AddItemNudge {
      nudgeMessage {
        text
        icon
        color
      }
      collectionModalDeeplink
      progress
    }
    ... on ClipCouponNudge {
      nudgeMessage {
        text
        icon
        color
      }
      buttonText
      incentiveId
    }
  }
`;e.s(["NudgeFragment",0,t,"PromoNudgeFragment",0,n])},208926,e=>{"use strict";var r=e.i(725601);let t=r.gql`
  fragment ItemLimitDataFragment on ItemLimitData {
    limit
  }
`;e.s(["ItemLimitDataFragment",0,t])},459004,e=>{"use strict";var r=e.i(725601);let t=r.gql`
  fragment LineItemFragment on LineItem {
    label
    labelIcon
    discountIcon
    chargeId
    finalMoney {
      unitAmount
      displayString
    }
    originalMoney {
      unitAmount
      displayString
    }
    tooltip {
      title
      paragraphs {
        description
      }
    }
    note
  }
`;e.s(["LineItemFragment",0,t])},518337,e=>{"use strict";var r=e.i(725601),t=e.i(699018),n=e.i(53797),s=e.i(33306),i=e.i(191237),a=e.i(423258),o=e.i(473303),d=e.i(533969),l=e.i(208926),u=e.i(459004);let m=r.gql`
  fragment ConsumerOrdersFragment on Order {
    id
    consumer {
      firstName
      lastName
      id
      localizedNames {
        informalName
        formalName
        formalNameAbbreviated
      }
    }
    isSubCartFinalized
    splitBillSubcartStatus
    lineItems {
      ...LineItemFragment
    }
    orderItems {
      __typename
      id
      options {
        id
        name
        quantity
        nestedOptions
      }
      itemLevelDiscount {
        promoId
        promoCode
        externalCampaignId
      }
      cartItemStatusType
      nestedOptions
      specialInstructions
      substitutionPreference
      quantity
      singlePrice
      priceOfTotalQuantity
      priceDisplayString
      nonDiscountPriceDisplayString
      continuousQuantity
      unit
      purchaseType
      estimatedPricingDescription
      isPrescriptionItem
      unitPriceDisplayStyle {
        textColor
      }
      increment {
        decimalPlaces
        unitAmount
      }
      discounts {
        ...OrderItemDiscountFragment
        __typename
      }
      item {
        id
        imageUrl
        name
        price
        minAgeRequirement
        category {
          title
        }
        extras {
          id
          title
          description
        }
        itemTagsList {
          tagType
          localizedName
          shortName
          id
          description
          displayType
        }
        storeId
        businessId
      }
      bundleStore {
        ...OrderItemBundleFragment
      }
      giftInfo {
        ...CartItemGiftInfoFragment
        __typename
      }
      badges {
        ...BadgeFragment
        __typename
      }
      nudgeList {
        ...NudgeFragment
      }
      promoNudgeList {
        ...PromoNudgeFragment
      }
      itemLimitData {
        ...ItemLimitDataFragment
      }
    }
    paymentCard {
      id
      stripeId
    }
    paymentLineItems {
      subtotal
      taxAmount
      subtotalTaxAmount
      feesTaxAmount
      serviceFee
    }
  }
  ${s.OrderItemDiscountFragment}
  ${i.CartItemGiftInfoFragment}
  ${a.badgeFragment}
  ${d.NudgeFragment}
  ${d.PromoNudgeFragment}
  ${n.OrderItemBundleFragment}
  ${l.ItemLimitDataFragment}
  ${u.LineItemFragment}
`,c=r.gql`
  fragment ConsumerOrderCartDomainFragment on OrderCart {
    domain {
      giftInfo {
        recipientName
        recipientGivenName
        recipientFamilyName
        recipientPhone
        recipientEmail
        cardMessage
        cardId
        shouldNotifyTrackingToRecipientOnDasherAssign
        shouldNotifyRecipientForDasherQuestions
        senderName
        shouldRecipientScheduleGift
        hasGiftIntent
      }
    }
  }
`,f=r.gql`
  fragment ConsumerOrderCartFragment on OrderCart {
    id
    hasError
    cartType
    isConsumerPickup
    isConvenienceCart
    isPrescriptionDelivery
    prescriptionStoreInfo {
      retailStoreId
    }
    isMerchantShipping
    offersDelivery
    offersPickup
    subtotal
    urlCode
    groupCart
    groupCartType
    groupCartSource
    groupCartPollInterval
    scheduledDeliveryAvailable
    isCatering
    isSameStoreCatering
    isBundle
    bundleType
    fulfillmentType
    originalBundleOrderCartId
    cartStatusType
    cateringInfo {
      cateringVersion
      minOrderSize
      maxOrderSize
      orderInAdvanceInSeconds
      cancelOrderInAdvanceInSeconds
    }
    shortenedUrl
    maxIndividualCost
    serviceRateMessage
    isOutsideDeliveryRegion
    currencyCode
    asapMinutesRange
    orderTimeAvailability {
      ...CheckoutOrderTimeAvailabilityFragment
    }
    menu {
      id
      hoursToOrderInAdvance
      name
      minOrderSize
      isCatering
    }
    creator {
      id
      firstName
      lastName
      localizedNames {
        informalName
        formalName
        formalNameAbbreviated
      }
    }
    deliveries {
      id
      quotedDeliveryTime
    }
    submittedAt
    restaurant {
      id
      name
      maxOrderSize
      coverImgUrl
      slug
      address {
        printableAddress
        street
        lat
        lng
      }
      business {
        id
        name
      }
      orderProtocol
      idealGroupSize
      highQualitySubtotalThreshold
    }
    storeDisclaimers {
      id
      disclaimerDetailsLink
      disclaimerLinkSubstring
      disclaimerText
      displayTreatment
    }
    orders {
      ...ConsumerOrdersFragment
      __typename
    }
    selectedDeliveryOption {
      deliveryOptionType
      scheduledWindow {
        rangeMinUtc
        rangeMaxUtc
      }
    }
    teamAccount {
      id
      name
    }
    total
    totalBeforeDiscountsAndCredits
    footerDetails {
      title
      subtitle
    }
    outOfStockMenuItemIds
    orderQualityInfo {
      isLoqNudgeAllowed
      isLoqForceSchedule
    }
    ...InvalidItemsFragment
    ...ConsumerOrderCartDomainFragment
    __typename
  }
  ${t.invalidItemsFragment}
  ${m}
  ${c}
  ${o.checkoutOrderTimeAvailabilityFragment}
`;e.s(["consumerOrderCartFragment",0,f])},817159,e=>{"use strict";var r=e.i(822422),t=e.i(396375),n=e.i(220647),s=e.i(895277),i=e.i(22261);let a=s.createContext({consumer:null}),o=e=>{let r,s=(0,t.c)(2),{consumer:a}=e;s[0]!==a?(r=[{query:n.consumerQuery,data:{consumer:a},variables:void 0}],s[0]=a,s[1]=r):r=s[1];let o=r;return(0,i.useHydrateApolloCacheDataOnce)(o),null};e.s(["ServerConsumerQueryContextProvider",0,e=>{let n,s,i,d,l=(0,t.c)(10),{children:u,consumer:m}=e;return l[0]!==m?(n=(0,r.jsx)(o,{consumer:m}),l[0]=m,l[1]=n):n=l[1],l[2]!==m?(s={consumer:m},l[2]=m,l[3]=s):s=l[3],l[4]!==u||l[5]!==s?(i=(0,r.jsx)(a.Provider,{value:s,children:u}),l[4]=u,l[5]=s,l[6]=i):i=l[6],l[7]!==n||l[8]!==i?(d=(0,r.jsxs)(r.Fragment,{children:[n,i]}),l[7]=n,l[8]=i,l[9]=d):d=l[9],d},"useServerConsumerQueryContext",0,()=>{let e,r=(0,t.c)(2),{consumer:n}=s.useContext(a);return r[0]!==n?(e={consumer:n},r[0]=n,r[1]=e):e=r[1],e}])},138045,e=>{"use strict";var r=e.i(82724);function t(e){if(null==e)return null;let r=parseInt(e,10);return isNaN(r)?null:r}let n={dropoffOptions:[],activeSubscription:{__typename:"Subscription",subscriptionStatus:null,id:null,subscriptionPlan:null}};e.s(["mapUgConsumerToApolloConsumerFull",0,e=>{var s,i;let a,o;return{__typename:"Consumer",id:e.id??null,userId:e.userId??null,timezone:e.timezone??"US/Pacific",firstName:e.firstName??null,lastName:e.lastName??null,localizedNames:(a=e.localizedNames,{__typename:"LocalizedNames",informalName:a?.shortName??"",formalName:a?.fullName??"",formalNameAbbreviated:a?.fullPrivatizedName??""}),email:e.email??null,marketId:e.marketId??null,phoneNumber:e.phoneNumber??null,defaultCountry:e.defaultCountry??null,isGuest:e.isGuest??!1,scheduledDeliveryTime:e.scheduledDeliveryTime??"ASAP",availableAddresses:null,phoneNumberComponents:(s=e.phoneNumberComponents)?{__typename:"PhoneNumberComponents",formattedNationalNumber:s?.formattedNationalNumber??"",nationalNumber:s?.nationalNumber??"",formattedInternationalNumber:s?.formattedInternationalNumber??"",countryCode:s?.countryCode??"",internationalNumber:s?.internationalNumber??"",countryShortname:s?.countryShortname??""}:null,orderCart:null,defaultAddress:e.defaultAddress?(i=e.defaultAddress,{__typename:"DefaultAddress",id:i?.id??"",addressId:i?.addressId??"",street:i?.street??"",city:i?.locality??"",state:i?.administrativeAreaLevel1??"",zipCode:i?.postalCode??"",country:i?.country??"",countryCode:i?.countryShortname??"",lat:i?.lat??0,lng:i?.lng??0,subpremise:i?.subpremise??"",districtId:t(i?.districtId),timezone:i?.timezone??"",shortname:i?.shortName??"",printableAddress:i?.printableAddress??"",driverInstructions:i?.driverInstructions||null,dropoffPreferences:{__typename:"DropoffPreferences",allPreferences:(o=i?.dropoffPreferences,o?.map(e=>({__typename:"DropoffPreference",optionId:e.optionId??"",isDefault:e.isDefault??!1,instructions:e.instructions??""}))??[])},buildingName:i?.buildingName||null,entryCode:i?.entryCode||null,addressLinkType:r.AddressLinkType.ADDRESS_LINK_TYPE_UNSPECIFIED,personalAddressLabel:i?.personalAddressLabel?.labelName?{__typename:"PersonalAddressLabel",labelIcon:(e=>{switch(e){case"LABEL_ICON_TYPE_HOME":return r.PersonalAddressLabelIcon.LABEL_ICON_TYPE_HOME;case"LABEL_ICON_TYPE_WORK":return r.PersonalAddressLabelIcon.LABEL_ICON_TYPE_WORK;case"LABEL_ICON_TYPE_PIN":return r.PersonalAddressLabelIcon.LABEL_ICON_TYPE_PIN;case"LABEL_ICON_TYPE_UNSPECIFIED":return r.PersonalAddressLabelIcon.LABEL_ICON_TYPE_UNSPECIFIED;default:return null}})(i?.personalAddressLabel?.labelIcon),labelName:i?.personalAddressLabel.labelName??null}:null,formattedAddressSegmentedList:i?.formattedAddressSegmentedList??[],formattedAddressSegmentedNonUserEditableFieldsList:i?.formattedAddressSegmentedNonUserEditableFieldsList??[],submarketId:t(i?.submarketId),manualLat:i?.lat??null,manualLng:i?.lng??null,submarket:null}):null,districtAvailability:{__typename:"DistrictAvailability",isDistrictActive:e.isDistrictActive??!1},...n}}])},327011,e=>{"use strict";e.s(["CONSUMER_QUERY_KEY",0,"consumer"])},150003,e=>{"use strict";var r=e.i(82724);e.s(["mapApolloConsumerToUgConsumerFull",0,e=>{var t,n,s;return{id:e.id??null,userId:e.userId??null,timezone:e.timezone??void 0,firstName:e.firstName??void 0,lastName:e.lastName??void 0,localizedNames:(e=>{if(e)return{shortName:e.informalName??"",fullName:e.formalName??"",fullPrivatizedName:e.formalNameAbbreviated??""}})(e.localizedNames??void 0),email:e.email??void 0,marketId:e.marketId??null,phoneNumber:e.phoneNumber??void 0,defaultCountry:e.defaultCountry??void 0,isGuest:e.isGuest??void 0,scheduledDeliveryTime:e.scheduledDeliveryTime??void 0,phoneNumberComponents:((t=e.phoneNumberComponents)?{formattedNationalNumber:t.formattedNationalNumber??"",nationalNumber:t.nationalNumber??"",formattedInternationalNumber:t.formattedInternationalNumber??"",countryCode:t.countryCode??"",internationalNumber:t.internationalNumber??"",countryShortname:t.countryShortname??""}:null)??void 0,defaultAddress:((n=e.defaultAddress)?{id:n?.id??"",addressId:n?.addressId??"",street:n.street??"",locality:n?.city??"",administrativeAreaLevel1:n?.state??"",postalCode:n?.zipCode??"",country:n?.country??"",countryShortname:n?.countryCode??"",lat:n?.lat??0,lng:n?.lng??0,subpremise:n?.subpremise??"",districtId:n?.districtId===null||n?.districtId===void 0?null:String(n?.districtId),timezone:n.timezone??"",shortName:n?.shortname??"",printableAddress:n?.printableAddress??"",driverInstructions:n?.driverInstructions??void 0,dropoffPreferences:(s=n?.dropoffPreferences?.allPreferences)?s.map(e=>({optionId:e.optionId??"",isDefault:e.isDefault??!1,instructions:e.instructions??""})):[],buildingName:n?.buildingName??void 0,entryCode:n?.entryCode??void 0,personalAddressLabel:n.personalAddressLabel?.labelName?{labelIcon:(e=>{switch(e){case r.PersonalAddressLabelIcon.LABEL_ICON_TYPE_HOME:return"LABEL_ICON_TYPE_HOME";case r.PersonalAddressLabelIcon.LABEL_ICON_TYPE_WORK:return"LABEL_ICON_TYPE_WORK";case r.PersonalAddressLabelIcon.LABEL_ICON_TYPE_PIN:return"LABEL_ICON_TYPE_PIN";case r.PersonalAddressLabelIcon.LABEL_ICON_TYPE_UNSPECIFIED:return"LABEL_ICON_TYPE_UNSPECIFIED";default:return null}})(n.personalAddressLabel.labelIcon)??"LABEL_ICON_TYPE_UNSPECIFIED",labelName:n.personalAddressLabel.labelName??""}:void 0,formattedAddressSegmentedList:n.formattedAddressSegmentedList??[],formattedAddressSegmentedNonUserEditableFieldsList:n.formattedAddressSegmentedNonUserEditableFieldsList??[],submarketId:null===n.submarketId||void 0===n.submarketId?null:String(n.submarketId)}:null)??void 0,isDistrictActive:e.districtAvailability?.isDistrictActive??void 0}}])},133101,e=>{"use strict";var r=e.i(396375),t=e.i(220647),n=e.i(307549),s=e.i(856548),i=e.i(406250),a=e.i(252978),o=e.i(449368),d=e.i(52330),l=e.i(655139),u=e.i(577169),m=e.i(817159),c=e.i(800898),f=e.i(138045),p=e.i(327011),_=e.i(150003);function b(e){return(0,f.mapUgConsumerToApolloConsumerFull)(e)}e.s(["useConsumerQuery",0,(e,v)=>(0,n.isServer)()?{consumer:(0,m.useServerConsumerQueryContext)().consumer,loading:!1,error:void 0,refetch:()=>Promise.resolve(null),updateCache:()=>{}}:((e,n)=>{let m,v,N,g,y,C,I,O,A,S,x,P,L=(0,r.c)(32);if(L[0]!==e)m={query:t.consumerQuery,options:{fetchPolicy:"cache-first",notifyOnNetworkStatusChange:!1,skip:e}},L[0]=e,L[1]=m;else m=L[1];let{query:h,options:T}=m,F=(0,a.useQueryClient)();L[2]!==F?(v=F.getQueryData(["consumer"]),L[2]=F,L[3]=v):v=L[3];let D=!!v,[E]=(0,d.useUGClient)(l.default),J=!T.skip;L[4]===Symbol.for("react.memo_cache_sentinel")?(N=[p.CONSUMER_QUERY_KEY],L[4]=N):N=L[4],L[5]!==E?(g=()=>E.getCxClientPlatformV1Consumer(),L[5]=E,L[6]=g):g=L[6];let z=D&&J;L[7]!==g||L[8]!==z?(y={queryKey:N,queryFn:g,select:b,enabled:z},L[7]=g,L[8]=z,L[9]=y):y=L[9];let k=(0,o.useQuery)(y);L[10]!==F?(C=e=>{F.setQueryData([p.CONSUMER_QUERY_KEY],r=>{let t=e((0,f.mapUgConsumerToApolloConsumerFull)(r)),n=(0,_.mapApolloConsumerToUgConsumerFull)(t);return{...r,...n}})},L[10]=F,L[11]=C):C=L[11];let M=C;L[12]!==n?(I=n||{},L[12]=n,L[13]=I):I=L[13];let U=D||T.skip;L[14]!==T||L[15]!==I||L[16]!==U?(O={...T,...I,skip:U},L[14]=T,L[15]=I,L[16]=U,L[17]=O):O=L[17];let R=(0,i.useQuery)(h,O);L[18]!==R?(A=e=>{R.client.cache.writeQuery({query:t.consumerQuery,data:{consumer:{...R.data?.consumer,...e(R.data?.consumer??{})}}})},L[18]=R,L[19]=A):A=L[19];let B=A;L[20]!==R?(S=async()=>{let e=await R.refetch();return e.data?.consumer},L[20]=R,L[21]=S):S=L[21];let Y=S;L[22]!==k?(x=async()=>(await k.refetch()).data??null,L[22]=k,L[23]=x):x=L[23];let q=x;if(L[24]!==R||L[25]!==Y||L[26]!==B||L[27]!==D||L[28]!==k||L[29]!==q||L[30]!==M){var G;let e,r,t;G=D?{data:{consumer:k.data??null},loading:k.isPending,error:k.error?(e=k.error,new s.ApolloError({errorMessage:e.message})):void 0,refetch:q,updateCache:M}:{...R,updateCache:B,refetch:Y},t={consumer:r=(0,c.defaultConsumerData)(G?.data),loading:G.loading,error:G.error,refetch:G.refetch,updateCache:G.updateCache??(()=>{})},G.loading||G.error||(0,u.trackUser)(r.id,r.isGuest),P=t,L[24]=R,L[25]=Y,L[26]=B,L[27]=D,L[28]=k,L[29]=q,L[30]=M,L[31]=P}else P=L[31];return P})(e,v)])},199223,e=>{"use strict";var r=e.i(470387),t=e.i(40616);e.s(["clearUser",0,function(){let e=r.getCurrentScope();e.setUser({}),e.setTag(t.CxCommonSentryTag.ConsumerType,"guest")},"setUser",0,function(e,n){let s=r.getCurrentScope();e&&s.setUser({id:`consumer:${e}`}),s.setTag(t.CxCommonSentryTag.ConsumerType,n?"guest":"logged-in")}])},577169,e=>{"use strict";var r=e.i(199223);e.s(["trackUser",0,(e,t)=>{e?(0,r.setUser)(e,t):(0,r.clearUser)()}])}]);

//# debugId=a966f902-2b85-2ab5-ce85-c94c437cee03
//# sourceMappingURL=0b_zo17p5kiwl.js.map