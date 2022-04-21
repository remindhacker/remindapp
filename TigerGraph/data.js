Creating a Graph Schema


CREATE VERTEX Gender(PRIMARY_ID gender_id STRING) WITH primary_id_as_attribute="true"

CREATE VERTEX Race(PRIMARY_ID race_id STRING) WITH primary_id_as_attribute="true"

CREATE VERTEX Ethnicity(PRIMARY_ID ethnicity_id STRING) WITH primary_id_as_attribute="true"

CREATE VERTEX Address(PRIMARY_ID address_id STRING, name STRING, lat DOUBLE, lon DOUBLE) WITH primary_id_as_attribute="true"

CREATE VERTEX City(PRIMARY_ID city_id STRING) WITH primary_id_as_attribute="true"

CREATE VERTEX State(PRIMARY_ID state_id STRING) WITH primary_id_as_attribute="true"

CREATE VERTEX County(PRIMARY_ID county_id STRING) WITH primary_id_as_attribute="true"

CREATE VERTEX ZipCode(PRIMARY_ID zip_id STRING) WITH primary_id_as_attribute="true"

CREATE VERTEX SnomedCode(PRIMARY_ID snomed_code STRING, description STRING) WITH primary_id_as_attribute="true"

CREATE VERTEX Patient(PRIMARY_ID patient_id STRING, lastName STRING, firstName STRING, maiden STRING,
                      birthday DATETIME, ssn STRING, license STRING, passport STRING,
                      healthcareExpense DOUBLE, healthcareCoverage DOUBLE, suffix STRING, prefix STRING, maritalStatus STRING, birthplace STRING) WITH primary_id_as_attribute="true"

CREATE VERTEX Allergies(PRIMARY_ID allergy_id STRING, allergy_code STRING, description STRING, startDate DATETIME, endDate DATETIME) WITH primary_id_as_attribute="true"

CREATE VERTEX Device(PRIMARY_ID UDI_code STRING, description STRING, startDate DATETIME, endDate DATETIME) WITH primary_id_as_attribute="true"

CREATE VERTEX Medication(PRIMARY_ID medication_id STRING, medication_code STRING, description STRING, startDate DATETIME, endDate DATETIME, baseCost DOUBLE, payerCoverage DOUBLE, dispenses INT, totalCost DOUBLE) WITH primary_id_as_attribute="true"

CREATE VERTEX Procedures(PRIMARY_ID procedure_id STRING, procedure_code STRING, description STRING, baseCost INT, dateOfProcedure DaTETIME) WITH primary_id_as_attribute="true"

CREATE VERTEX Careplans(PRIMARY_ID careplan_id STRING, description STRING, startDate DATETIME, endDate DATETIME) WITH primary_id_as_attribute="true"

CREATE VERTEX Conditions(PRIMARY_ID condition_id STRING, condition_code STRING, description STRING, startDate DATETIME, endDate DATETIME) WITH primary_id_as_attribute="true"

CREATE VERTEX Immunizations(PRIMARY_ID immunization_id STRING, immunization_code STRING, description STRING, dateOfImmunization DATETIME, baseCost DOUBLE) WITH primary_id_as_attribute="true"

CREATE VERTEX Observations(PRIMARY_ID observation_id STRING, dateOfObservation DATETIME, observation_code STRING, description STRING, obsValue STRING, units STRING) WITH primary_id_as_attribute="true"

CREATE VERTEX Organizations(PRIMARY_ID organization_id STRING, name STRING, revenue DOUBLE, utilization INT, phone STRING) WITH primary_id_as_attribute="true"

CREATE VERTEX Providers(PRIMARY_ID provider_id STRING, name STRING, utilization INT, speciality STRING) WITH primary_id_as_attribute="true"

CREATE VERTEX ImagingStudies(PRIMARY_ID imaging_id STRING, bodySiteCode STRING, bodySiteDescription STRING, modalityCode STRING,
                            modalityDescription STRING, SOPCode STRING, SOPDescription STRING, dateOfImage DATETIME) WITH primary_id_as_attribute="true"

CREATE VERTEX Payer(PRIMARY_ID payer_id STRING, name STRING, phone STRING, amountCovered DOUBLE, amountUncovered DOUBLE, revenue DOUBLE,
                    coveredEncounters INT, uncoveredEncounters INT, coveredMedications INT, uncoveredMedications INT,
                    coveredProcedures INT, uncoveredProcedures INT, coveredImmunizations INT, uncoveredImmunizations INT,
                    uniqueCustomers INT, QOLS_Avg DOUBLE, memberMonths INT) WITH primary_id_as_attribute="true"
CREATE VERTEX Encounter(PRIMARY_ID encounter_id STRING, baseEncounterCost DOUBLE, totalClaimCost DOUBLE, payerCoverage DOUBLE, classType STRING, startTime DATETIME, endTime DATETIMe) WITH primary_id_as_attribute="true"

CREATE VERTEX Notes(PRIMARY_ID note_id STRING, chiefComplaint STRING, historyOfPresentIllness STRING, socialHistory STRING, allergies STRING, medications STRING, assessment STRING, plan STRING, dateOfNote DATETIME) with primary_id_as_attribute="true"

CREATE VERTEX Symptoms(PRIMARY_ID symptom_id STRING, symptom STRING, symptomValue INT, pathology STRING, ageBegin INT, ageEnd INT) with primary_id_as_attribute="true"

CREATE UNDIRECTED EDGE PATIENT_HAS_SYMPTOM(From Patient, To Symptoms)

CREATE UNDIRECTED EDGE PATIENT_NOTE(FROM Patient, to Notes)

CREATE UNDIRECTED EDGE ADDRESS_CITY(From Address, To City)
CREATE UNDIRECTED EDGE ADDRESS_COUNTY(From Address, To County)
CREATE UNDIRECTED EDGE ADDRESS_ZIPCODE(From Address, To ZipCode)
CREATE UNDIRECTED EDGE STATE_HAS_COUNTY(From State, To County)
CREATE UNDIRECTED EDGE COUNTY_HAS_CITY(From County, To City)
CREATE UNDIRECTED EDGE CITY_HAS_ZIPCODE(From City, To ZipCode)

CREATE UNDIRECTED EDGE PATIENT_GENDER(FROM Patient, TO Gender)
CREATE UNDIRECTED EDGE PATIENT_ADDRESS(FROM Patient, To Address)
CREATE UNDIRECTED EDGE PATIENT_RACE(FROM Patient, TO Race)
CREATE UNDIRECTED EDGE PATIENT_ETHNICITY(FROM Patient, TO Ethnicity)

CREATE UNDIRECTED EDGE PATIENT_HAS_ALLERGY(FROM Allergies, to Patient)
Create UNDIRECTED EDGE ENCOUNTER_FOR_ALLERGY(FROM Allergies, TO Encounter)
CREATE UNDIRECTED EDGE ALLERGY_CODE(FROM Allergies, TO SnomedCode)

CREATE UNDIRECTED EDGE PATIENT_HAS_DEVICE(FROM Device, TO Patient)
CREATE UNDIRECTED EDGE ENCOUNTER_FOR_DEVICE(FROM Device, TO Encounter)
CREATE UNDIRECTED EDGE DEVICE_CODE(FROM Device, TO SnomedCode)

CREATE UNDIRECTED EDGE PATIENT_HAS_MEDICATION(FROM Medication, TO Patient)
CREATE UNDIRECTED EDGE MEDICATION_PAYER(FROM Medication, TO Payer)
CREATE UNDIRECTED EDGE ENCOUNTER_FOR_MEDICATION(FROM Medication, TO Encounter)
CREATE UNDIRECTED EDGE MEDICATION_REASON_CODE(FROM Medication, TO SnomedCode)
CREATE UNDIRECTED EDGE MEDICATION_CODE(FROM Medication, To SnomedCode)

CREATE UNDIRECTED EDGE PROCEDURE_CODE(FROM Procedures, To SnomedCode)
CREATE UNDIRECTED EDGE PROCEDURE_REASON_CODE(FROM Procedures, To SnomedCode)
CREATE UNDIRECTED EDGE PATIENT_HAS_PROCEDURE(FROM Procedures, To Patient)
CREATE UNDIRECTED EDGE ENCOUNTER_FOR_PROCEDURE(FROM Procedures, To Encounter)

CREATE UNDIRECTED EDGE PATIENT_HAS_CAREPLAN(FROM Careplans, TO Patient)
CREATE UNDIRECTED EDGE ENCOUNTER_FOR_CAREPLAN(FROM Careplans, TO Encounter)
CREATE UNDIRECTED EDGE CAREPLAN_CODE(FROM Careplans, TO SnomedCode)
CREATE UNDIRECTED EDGE CAREPLAN_REASON_CODE(FROM Careplans, TO SnomedCode)

CREATE UNDIRECTED EDGE PATIENT_HAS_CONDITION(FROM Conditions, TO Patient)
CREATE UNDIRECTED EDGE ENCOUNTER_FOR_CONDITION(FROM Conditions, TO Encounter)
CREATE UNDIRECTED EDGE CONDITION_CODE(FROM Conditions, TO SnomedCode)

CREATE UNDIRECTED EDGE PATIENT_HAS_IMMUNIZATION(FROM Immunizations, TO Patient)
CREATE UNDIRECTED EDGE ENCOUNTER_FOR_IMMUNIZATION(FROM Immunizations, TO Encounter)
CREATE UNDIRECTED EDGE IMMUNIZATION_CODE(FROM Immunizations, TO SnomedCode)

CREATE UNDIRECTED EDGE OBSERVATION_FOR_PATIENT(FROM Observations, TO Patient)
CREATE UNDIRECTED EDGE ENCOUNTER_FOR_OBSERVATION(FROM Observations, TO Encounter)
CREATE UNDIRECTED edge OBSERVATION_CODE(From Observations, To SnomedCode)

CREATE UNDIRECTED EDGE ORGANIZATION_ADDRESS(From Organizations, To Address)

CREATE UNDIRECTED EDGE PROVIDER_HAS_ORGANIZATION(FROM Providers, TO Organizations)
CREATE UNDIRECTED EDGE PROVIDER_GENDER(FROM Providers, TO Gender)
CREATE UNDIRECTED EDGE PROVIDER_ADDRESS(From Providers, To Address)

CREATE UNDIRECTED EDGE PATIENT_HAS_IMAGING(FROM ImagingStudies, TO Patient)
CREATE UNDIRECTED EDGE ENCOUNTER_FOR_IMAGING(FROM ImagingStudies, TO Encounter)
CREATE UNDIRECTED EDGE IMAGING_CODE(FROM ImagingStudies, TO SnomedCode)

CREATE UNDIRECTED EDGE PAYER_TRANSITION(FROM Payer, TO Patient, startYear DATETIME, endYear DATETIME, ownership STRING)
CREATE UNDIRECTED EDGE PAYER_ADDRESS(From Payer, To Address)

CREATE UNDIRECTED EDGE ENCOUNTER_FOR_PATIENT(FROM Encounter, TO Patient)
CREATE UNDIRECTED EDGE ENCOUNTER_UNDER_ORGANIZATION(FROM Encounter, TO Organizations)
CREATE UNDIRECTED EDGE ENCOUNTER_HAS_PROVIDER(FROM Encounter, TO Providers)
CREATE UNDIRECTED EDGE ENCOUNTER_HAS_PAYER(FROM Encounter, TO Payer)
CREATE UNDIRECTED EDGE ENCOUNTER_CODE(FROM Encounter, TO SnomedCode)
CREATE UNDIRECTED EDGE ENCOUNTER_REASON_CODE(FROM Encounter, TO SnomedCode)

CREATE Graph synthea(Gender, Race, Ethnicity, Address, City, State, County, ZipCode, SnomedCode, Patient, Allergies, Device, Medication, Procedures,
                        Careplans, Conditions, Immunizations, Observations, Organizations, Providers, ImagingStudies, Payer, Encounter, Notes, Symptoms,
                        PATIENT_HAS_SYMPTOM, PATIENT_NOTE, ADDRESS_CITY, ADDRESS_COUNTY, ADDRESS_ZIPCODE, STATE_HAS_COUNTY, COUNTY_HAS_CITY, CITY_HAS_ZIPCODE, PATIENT_GENDER,
                        PATIENT_ADDRESS, PATIENT_RACE, PATIENT_ETHNICITY, PATIENT_HAS_ALLERGY, ENCOUNTER_FOR_ALLERGY, ALLERGY_CODE,
                        PATIENT_HAS_DEVICE, ENCOUNTER_FOR_DEVICE, DEVICE_CODE, PATIENT_HAS_MEDICATION, MEDICATION_PAYER, ENCOUNTER_FOR_MEDICATION,
                        MEDICATION_REASON_CODE, MEDICATION_CODE, PROCEDURE_CODE, PROCEDURE_REASON_CODE, PATIENT_HAS_PROCEDURE, ENCOUNTER_FOR_PROCEDURE,
                        PATIENT_HAS_CAREPLAN, ENCOUNTER_FOR_CAREPLAN, CAREPLAN_CODE, CAREPLAN_REASON_CODE, PATIENT_HAS_CONDITION, ENCOUNTER_FOR_CONDITION,
                        CONDITION_CODE, PATIENT_HAS_IMMUNIZATION, ENCOUNTER_FOR_IMMUNIZATION, IMMUNIZATION_CODE, OBSERVATION_FOR_PATIENT, ENCOUNTER_FOR_OBSERVATION,
                        OBSERVATION_CODE, ORGANIZATION_ADDRESS, PROVIDER_HAS_ORGANIZATION, PROVIDER_GENDER, PROVIDER_ADDRESS, PATIENT_HAS_IMAGING, ENCOUNTER_FOR_IMAGING,
                        IMAGING_CODE, PAYER_TRANSITION, PAYER_ADDRESS, ENCOUNTER_FOR_PATIENT, ENCOUNTER_UNDER_ORGANIZATION, ENCOUNTER_HAS_PROVIDER, ENCOUNTER_HAS_PAYER,
                        ENCOUNTER_CODE, ENCOUNTER_REASON_CODE)




                        Loading the Data




                        create loading job loadCareplans for graph synthea {
                            /* load careplan csv into appropriate vertices & edges */
                            
                                define filename f1 = 'path/to/file.csv';
                            
                                load f1
                                    to vertex Careplans values ($0, $6, $1, $2),
                                    to vertex SnomedCode values ($5, $6),
                                    to vertex SnomedCode values ($7, $8),
                                    to edge PATIENT_HAS_CAREPLAN values ($0, $3),
                                    to edge ENCOUNTER_FOR_CAREPLAN values ($0, $4),
                                    to edge CAREPLAN_CODE values ($0, $5),
                                    to edge CAREPLAN_REASON_CODE values ($0, $7)
                                    using header="true", separator=",";
                            }


                            Sample Query

                            create query select_All_Patient (STRING firstName, STRING lastName) for graph synthea {
                                /* Get all vertices and edges immediately connected to a patient
                                   Ex input: firstName = Antony, lastName = Hudson */
                                
                                    ListAccum @@edgelist;
                                    Seed = {Patient.*};
                                
                                    patient = select s
                                                FROM Seed:s -() -:t
                                                where s.lastName == lastName and s.firstName == firstName;
                                
                                    response = select t
                                                from Seed:s -(:e) -:t
                                                where s.lastName == lastName and s.firstName == firstName
                                                ACCUM @@edgelist+=e;
                                
                                    print patient;
                                    print response;
                                    PRINT @@edgelist;
                                }
                                



