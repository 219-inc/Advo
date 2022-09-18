import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  BackHandler,
} from "react-native";
import { useState, useCallback, useContext, useEffect } from "react";
import tw from "twrnc";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import Step1 from "components/LawyerApplication/Step1";
import Step2 from "components/LawyerApplication/Step2";
import Step3 from "components/LawyerApplication/Step3";
import ContinueButton from "components/Registration/ContinueButton";

import createLawyerApplication from "functions/LawyerApplication";
import NotificationBoundaryContext from "layout/NotificationBoundary";
import UserContext from "context/User";

import { Ionicons } from "@expo/vector-icons";

const LawyerApplication = () => {
  const [isApplied, setIsApplied] = useState(false);
  const notification = useContext(NotificationBoundaryContext);
  const navigation = useNavigation();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.lawyerApplicationStatus == "applied") {
      setIsApplied(true);
    }
  }, []);

  const [formStep, setFormStep] = useState(0);

  const {
    watch,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  const submitForm = async (data) => {
    try {
      await createLawyerApplication({
        ...data,
        establishment: false,
        establishment_name: null,
        establishment_city: null,
        id_proof_S3URL: null,
        lawyer_registration_proof_S3URL: null,
        establishment_proof_S3URL: null,
      });
      notification.create({
        content: "Application submitted successfully",
        type: notification.types.SUCCESS,
      });
    } catch (err) {
      console.log(err);
      notification.create({
        content: "Error submitting application",
        type: notification.types.ERROR,
      });
    }
    setFormStep(3);
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (formStep > 0) setFormStep((cur) => cur - 1);
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  const renderButton = () => {
    if (formStep > 2) {
      return undefined;
    } else if (formStep == 2) {
      return (
        <ContinueButton
          onPress={handleSubmit(submitForm)}
          disabled={!isValid}
        />
      );
    } else {
      return <ContinueButton onPress={completeFormStep} disabled={!isValid} />;
    }
  };

  return (
    <>
      {!isApplied ? (
        <View style={tw`bg-gray-200 h-full`}>
          <StatusBar barStyle="dark-content" backgroundColor={"#1f2937"} />
          <View
            style={tw`w-full h-12 bg-gray-800 border-b border-gray-200 flex flex-row justify-between items-center shadow-md`}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={tw`px-4`}
            >
              <Text style={tw`text-red-500 font-semibold`}>Cancel</Text>
            </TouchableOpacity>
            <Text style={tw`text-white text-lg font-semibold`}>
              Lawyer Application
            </Text>
            <TouchableOpacity>
              <Text style={tw`text-blue-500 font-semibold mx-3`}>
                Save & Exit
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={tw`mx-4 flex flex-row items-center mt-4`}>
              {formStep > 0 && formStep < 4 && (
                <Ionicons name="arrow-back" size={24} color="black" />
              )}
              <Text style={tw`font-semibold`}>Step {formStep + 1} of 3</Text>
            </View>
            {formStep == 0 && <Step1 control={control} errors={errors} />}
            {formStep == 1 && <Step2 control={control} errors={errors} />}
            {formStep == 2 && <Step3 control={control} errors={errors} />}
            {formStep === 3 && (
              <View
                style={tw`flex flex-column text-center justify-center items-center h-20 mt-4`}
              >
                <Text style={tw`text-xl font-semibold`}>
                  Application Submitted
                </Text>
                <Text style={tw`mx-2 text-lg text-black`}>
                  Hello, thank you for submitting the application form. Our
                  Review Team will review your application and would contact
                  you.
                </Text>
              </View>
            )}
          </View>
          <View style={tw`absolute bottom-0`}>{renderButton()}</View>
        </View>
      ) : (
        <View style={tw`bg-gray-200 h-full px-4 py-4`}>
          <StatusBar barStyle="dark-content" backgroundColor={"#1f2937"} />
          <Text style={tw`text-lg font-semibold`}>
            You have already applied for the lawyer application. Please wait for
            the review team to review your application.
          </Text>
        </View>
      )}
    </>
  );
};

export default LawyerApplication;
