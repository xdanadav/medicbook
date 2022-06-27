import MapObject from '../MainClasses/MapObject';

let map = null;

function setUpMap(){
    map = new MapObject("ענפים");

    let rafmaz = new MapObject("רפואה מבצעית- \n שלום");
    let dentistry = new MapObject("רפואת שיניים");
    let leduuce = new MapObject("רפואת שיניים");
    let different = new MapObject("שונות");

    
    let trainingBranches = new MapObject("הכשרות");
    let corpsBranches = new MapObject("ענפי החייל");

    
    let academy = new MapObject("ענף אקדמיה");
    let advencedTrainings = new MapObject("הכשרות מתקדמות");
    let recoveryUnit = new MapObject("מש״קיות רמ 2");


    let medics = new MapObject("חובשים");
    trainingBranches.addChild(medics);

    /*Medics*/
    let truama = new MapObject("טראומה");
    let anamnesis = new MapObject( "Anamnesis")                          
    let anatomy = new MapObject( "Anatomy")
    let cpr = new MapObject( "Cpr")
    let nbc = new MapObject( "Nbc")
    let routine = new MapObject( "Routine")
    let medicine = new MapObject( "Medicine")
    let publicHealth = new MapObject( "PublicHealth")
    let mentalHealth = new MapObject( "MentalHealth")
    let teamWork = new MapObject( "TeamWork")
    let other = new MapObject( "Other")
    let tekenFifteen = new MapObject( "TekenFifteen")
    let skinProblems = new MapObject( "SkinProblems")
    let singleInjuredSchema = new MapObject( "SingleInjuredSchema")
    
    

    medics.addChild(anamnesis);
    medics.addChild(anatomy);
    medics.addChild(cpr);
    medics.addChild(nbc );
    medics.addChild(routine );
    medics.addChild(medicine );
    medics.addChild(publicHealth); 
    medics.addChild(mentalHealth); 
    medics.addChild(teamWork );
    medics.addChild(other );
    medics.addChild(tekenFifteen); 
    medics.addChild(skinProblems); 
    medics.addChild(singleInjuredSchema);

    



    let DentistAssistant = new MapObject("סייעות שיניים")
    trainingBranches.addChild(DentistAssistant)
    /**Dentist assistants**/

    let shift = new MapObject( "Shift")
    let periodontics = new MapObject( "Periodontics")
    let dentalMaterials = new MapObject( "DentalMaterials")
    let histology = new MapObject( "Histology")
    let endodontics = new MapObject( "Endodontics")
    let oralRehab = new MapObject( "OralRehab")
    let anesthesia = new MapObject( "Anesthesia")
    let surgery = new MapObject( "Surgery")
    let xRay = new MapObject( "XRay")
    let orthodontics = new MapObject( "Orthodontics")
    let ethics = new MapObject( "Ethics")
    let microBiology = new MapObject( "MicroBiology")
    let humanBody = new MapObject( "HumanBody")
    let pedodontics = new MapObject( "Pedodontics")
    let toothStructure = new MapObject( "ToothStructure")

    DentistAssistant.addChild(shift);
    DentistAssistant.addChild(periodontics );
    DentistAssistant.addChild(dentalMaterials);
    DentistAssistant.addChild(histology);
    DentistAssistant.addChild(endodontics );
    DentistAssistant.addChild(oralRehab);
    DentistAssistant.addChild(anesthesia );
    DentistAssistant.addChild(surgery );
    DentistAssistant.addChild(xRay );
    DentistAssistant.addChild(orthodontics );
    DentistAssistant.addChild(ethics);
    DentistAssistant.addChild(microBiology);
    DentistAssistant.addChild(humanBody);
    DentistAssistant.addChild(pedodontics);
    DentistAssistant.addChild(toothStructure );


    /**Advanced Training**/

    let paramedics = new MapObject( "Paramedics"             )
    let doctors = new MapObject( "Doctors")
    let nurses = new MapObject( "Nurses")
    let battalionMedic = new MapObject( "BattalionMedic")
    let squadMedic = new MapObject( "SquadMedic")
    let clinicManager = new MapObject( "ClinicManager")
    let corpsComletion = new MapObject( "CorpsCompletion")
    let dentistryOrg = new MapObject( "DentistryOrg")

    

    /**Academics**/

    let treeTop = new MapObject( "TreeTop"                      )
    let summit = new MapObject( "Summit")
    let wisdom = new MapObject( "Wisdom")
    let emergencyMedicine = new MapObject( "EmergencyMedicine")
    let pharmacy = new MapObject( "Pharmacy")

    //Corona
    let coronaVaccine = new MapObject( "CoronaVaccine"            )
    let coronaTeams = new MapObject( "CoronaTeams")
    let coronaNursingTeams = new MapObject( "CoronaNursingTeams")
    let coronaTester = new MapObject( "CoronaTester")

    /**RecoveryUnit**/

    let registrationReportDevision = new MapObject( "RegistrationReportDevision")
    let medicalDevision = new MapObject( "MedicalDevision")
    let familyDevision = new MapObject( "FamilyDevision")
    let logisticalDevision= new MapObject( "LogisticalDevision")
    let idfInterfaceDevision = new MapObject( "IdfInterfaceDevision")

     /**Corps Branches**/
     ///**Tourny**/
     //
     //zameret = new MapObject( "zameret"
    //physioTherapy = new MapObject( "PhysioTherapy"
    //bc = new MapObject( "Bc"

    /**Rafmaz**/
        
    let firstSurvey = new MapObject( "FirstSurvey")
    let secondSurvey = new MapObject( "SecondSurvey")
    let topicChapters = new MapObject( "TopicChapters")
    let dvarTorah = new MapObject( "DvarTorah")
    let appended = new MapObject( "Appended")

    /**Routine Medicine**/

    let ent = new MapObject( "Ent")
    let orology = new MapObject( "Orology")
    let orthopedics = new MapObject( "Orthopedics")
    let alergy = new MapObject( "Alergy")
    let gastro = new MapObject( "Gastro")
    let hemathology = new MapObject( "Hemathology")
    let routineSurgery = new MapObject( "RoutineSurgery")
    let neurology = new MapObject( "Neurology")
    let dermathology = new MapObject( "Dermathology")
    let eyes = new MapObject( "Eyes")
    let generalRoutine = new MapObject( "GeneralRoutine")

    /**Public Health Medicine**/

    let generalPublicHealth = new MapObject( "GeneralPublicHealth"      )
    let pestControl = new MapObject( "PestControl")
    let veterinary = new MapObject( "Veterinary")
    let epidemiology = new MapObject( "Epidemiology")
    let foodSafety = new MapObject( "FoodSafety")
    let healthPromotion = new MapObject( "HealthPromotion")
    let environmentHealth = new MapObject( "EnvironmentHealth")

    /**Dentistry**/

    let clinicalGuidelines = new MapObject( "ClinicalGuidelines")
    let dentalEmergencies = new MapObject( "DentalEmergencies")
    let administrative = new MapObject( "Administrative")

    /**Reserves**/
    let armyLifeSaver = new MapObject( "ArmyLifeSaver")
    let reservesMedic = new MapObject( "ReservesMedic")
    let reservesMedicalDevision = new MapObject( "MedicalTeam")
    let frontCPRUnit = new MapObject( "FrontCPRUnit")

    /**Different**/
    let zameret = new MapObject( "zameret")
    let physioTherapy = new MapObject( "PhysioTherapy")
    let bc = new MapObject( "Bc")

    trainingBranches.addChild(academy);
    trainingBranches.addChild(advencedTrainings);
    trainingBranches.addChild(recoveryUnit);

    corpsBranches.addChild(medicine);
    corpsBranches.addChild(leduuce);
    corpsBranches.addChild(different);
    corpsBranches.addChild(dentistry);


    corpsBranches.addChild(rafmaz);
    map.addChild(trainingBranches);
    map.addChild(corpsBranches);
}

setUpMap()

export default map

