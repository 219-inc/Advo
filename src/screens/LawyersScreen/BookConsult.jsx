import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import {
  AntDesign,
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
// import CheckBox from "@react-native-community/checkbox";

// const [toggleCheckBox, setToggleCheckBox] = useState(false);

const BookConsult = () => {
  return (
    <View className={tw``}>
      <ScrollView>
        <View style={tw` flex flex-row border-b-2 border-gray-100 py-2 `}>
          <AntDesign
            size={30}
            style={tw`ml-4 mr-4  text-gray-500`}
            name="arrowleft"
          />
          <Feather
            size={22}
            style={tw` ml-4 mr-4  text-white bg-purple-600 rounded-full p-1`}
            name="video"
          />

          <Text style={tw`text-lg font-semibold text-gray-600`}>
            Book Video Consultation
          </Text>
        </View>
        <View style={tw`flex flex-row mt-4`}>
          <View>
            <Image
              style={tw`ml-4 h-16 w-16 p-4 rounded-full`}
              source={{
                uri: "https://www.parkaman.com/wp-content/uploads/2018/08/How-to-Become-a-Corporate-Lawyer.jpg",
              }}
            />
          </View>
          <View style={tw`ml-4`}>
            <Text style={tw`text-lg font-semibold`}>Dr. Amitabh Khanna</Text>
            <Text style={tw`text-gray-400`}>General physician</Text>
          </View>
        </View>
        <View
          style={tw`flex flex-row items-center  border-b-8 pb-3 border-gray-100`}
        >
          <View
            style={tw`flex flex-row  items-center bg-purple-200 ml-4 px-2 rounded-xl mt-2`}
          >
            <Feather size={22} style={tw` text-purple-600  `} name="video" />
            <Text style={{ color: "#7C3AED", ...tw`` }}>Video</Text>
          </View>
          <View style={tw`flex flex-row  items-center`}>
            <AntDesign
              name="like1"
              style={tw`text-green-600 ml-5 `}
              size={20}
            />
            <Text style={tw`text-gray-500`}> 80% </Text>
          </View>
          <View style={tw`flex flex-row  items-center ml-3`}>
            <MaterialCommunityIcons
              name="comment-text"
              size={20}
              style={tw`text-green-600`}
            />
            <Text style={tw`text-gray-500`}>130 patients stories </Text>
          </View>
        </View>
        <View style={tw`border-b-8 pb-3 border-gray-100 `}>
          <View style={tw`flex flex-row mx-4 mt-3`}>
            <Feather size={18} style={tw` text-gray-400 `} name="video" />
            <Text style={{ color: "#7C3AED", ...tw`text-gray-500 ml-1` }}>
              Video Consultation time
            </Text>
          </View>
          <View style={tw`mx-4 `}>
            <View style={tw`flex flex-row items-center`}>
              <Text style={tw`text-xl`}>Tomorrow, 11:00 AM</Text>
              <Feather
                size={16}
                style={tw` border-l-2 border-gray-400 ml-1 pl-2 text-gray-400 `}
                name="clock"
              />
              <Text style={tw`text-gray-500 text-sm `}> in 14 hour</Text>
            </View>
            <View style={tw`flex flex-row`}>
              {/* <FontAwesome
              name="check-circle"
              size={20}
              style={{ color: "#7C3AED" }}
            />
            <Text style={{ color: "#7C3AED", ...tw`font-semibold` }}>
              {" "}
              Practo promise
            </Text> */}
              <Text style={tw`text-gray-500 items-center`}>
                {" "}
                Appointment confirmed instantly
              </Text>
            </View>
          </View>
          <View
            style={tw`mx-6 flex flex-row flex-wrap bg-green-200 rounded-xl p-2 px-7 mt-2`}
          >
            <Text style={tw`text-sm font-normal`}>You will also get a </Text>
            <Text style={tw`text-sm font-extrabold`}>
              Free follow-up for 7days{" "}
            </Text>
            <Text style={tw`text-sm font-normal`}>with every consultation</Text>
          </View>
        </View>
        <View
          style={tw`mx-4 flex flex-row mt-3 border-2 m-5 rounded-xl border-gray-100 p-2 `}
        >
          <View>
            <MaterialCommunityIcons
              name="brightness-percent"
              size={50}
              style={tw`text-purple-800`}
            />
          </View>
          <View style={tw`flex flex-row `}>
            <View>
              <Text style={tw`font-semibold ml-2 text-lg`}>
                Apply Coupon Code
              </Text>
              <Text style={tw` text-gray-500 ml-2 text-sm`}>
                1 coupon available
              </Text>
            </View>
            <View style={tw``}>
              <Text style={tw`text-lg ml-8 mt-2 text-blue-500 font-semibold`}>
                Apply
              </Text>
            </View>
          </View>
        </View>
        <View style={tw`mx-4  `}>
          <Text style={tw`font-semibold text-lg`}>Bill Details</Text>
        </View>
        <View style={tw`mx-4 border-b-2 pb-4 border-gray-100`}>
          <View style={tw`flex flex-row `}>
            <Text style={tw`text-gray-500`}>Consultation Fee</Text>
            <FontAwesome
              name="rupee"
              style={tw`absolute text-gray-500 right-9 mt-1`}
              size={14}
            />
            <Text style={tw`text-gray-500 font-semibold absolute right-0`}>
              1000
            </Text>
          </View>
          <View style={tw`flex flex-row `}>
            <Text style={tw`text-gray-500`}>Service Fee & Tax </Text>
            <FontAwesome
              name="rupee"
              style={tw`absolute text-gray-500 right-5 mt-1`}
              size={14}
            />
            <Text style={tw`text-gray-500 font-semibold absolute right-0`}>
              49
            </Text>
          </View>
          <View style={tw`flex flex-row `}>
            <Text style={tw`text-gray-500`}>HealthCash </Text>
            <FontAwesome
              name="rupee"
              style={tw`absolute text-green-500 right-12  mt-1`}
              size={14}
            />
            <Text style={tw`text-green-500 font-semibold absolute right-0`}>
              -157.35
            </Text>
          </View>
        </View>
        <View style={tw`mx-4  flex flex-row`}>
          <Text style={tw`text-xl font-semibold`}>Total Payable </Text>
          <FontAwesome
            name="rupee"
            style={tw`absolute text-gray-500 right-12  mt-1`}
            size={14}
          />
          <Text style={tw`text-gray-500 font-semibold absolute right-0`}>
            {" "}
            891.65
          </Text>
        </View>
        <View
          style={tw`mx-6 flex flex-row flex-wrap bg-green-200  rounded-xl border-dashed border-2 border-green-600 p-2 px-7 mt-2`}
        >
          <Text style={tw`text-sm  text-green-800 font-bold`}>
            You have saved 157.35 on this appointment
          </Text>
        </View>
        <View style={tw`border-t-8 mt-3 border-gray-100`}>
          <View
            style={tw`mx-4 mt-3 flex flex-row  border-b-2 border-gray-100 pb-3`}
          >
            {/* <CheckBox
            disabled={false}
            // value={}
            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
          /> */}
            <Text style={tw`font-semibold text-base text-gray-700`}>
              Get notification on whatsapp
            </Text>
          </View>
        </View>
        <View style={tw``}>
          <View style={tw`mx-4 mt-3 border-b-2 border-gray-100 pb-3`}>
            <Text style={tw`text-gray-500 text-sm`}>
              * Note : cancellation charge applicable
            </Text>
            <Text style={tw`text-gray-500 text-sm`}>
              * Updates will be sent to +918178392040
            </Text>
            <Text style={tw`text-gray-500 text-sm`}>
              * By booking the appointment,you agree to Proctor's
            </Text>
            <Text style={tw`text-blue-400 `}>{"  "} Terms & Conditions</Text>
          </View>
        </View>

        <View
          style={{ ...tw` bottom-0 mx-4 mt-3 flex flex-row justify-between ` }}
        >
          <View style={tw`flex flex-row  items-center`}>
            <View>
              <Image
                style={tw`ml-4 h-16 w-16 p-4 rounded-full`}
                source={{
                  uri: "https://www.parkaman.com/wp-content/uploads/2018/08/How-to-Become-a-Corporate-Lawyer.jpg",
                }}
              />
            </View>
            <View style={tw`ml-4`}>
              <Text style={tw`text-gray-400`}>Video Consult for</Text>
              <Text style={tw` font-semibold text-lg`}>Divyansh Gupta</Text>
            </View>
            <TouchableOpacity>
              <Text style={tw`ml-8 text-xl font-bold text-blue-400`}>
                CHANGE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`flex flex-row mt-4 items-center mx-4 pb-6`}>
          <View>
            <View>
              <Text style={tw`font-bold text-lg`}> 891.65</Text>
              <Text style={tw`text-blue-500 font-semibold`}> View Bill</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#7C3AED", ...tw`ml-24 w-48   ` }}>
            <TouchableOpacity style={tw`pl-6 pr-6 pt-2 pb-2`}>
              <Text style={tw`text-white text-center font-semibold`}>
                Pay & conform Video Consult
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookConsult;
