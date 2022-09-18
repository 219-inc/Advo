import {useState, useContext} from "react";
import Switch from "react-switch";
import Admin from '@/functions/Admin'

import ErrorContext from "@/context/ErrorContext";

function index({ method, path_name }) {

    const [isEnabled, setIsEnabled] = useState(method.isEnabled);

    const errors = useContext(ErrorContext);
    let admin = new Admin();

    const onChange = async (checked) => {
      await admin.changeSideMenuOptionStatus(method.name, checked);
      
      errors.throw(
        `${method.name} is now ${checked ? "enabled" : "disabled"}`,
        errors.SUCCESS
      )

      setIsEnabled(checked);
    }

    return (
      <div
        key={method.id}
        className="flex flex-row items-center justify-between hover:bg-gray-100 p-3 rounded-lg"
      >
        <div className="flex flex-row items-center space-x-2">
          {method.icon && <>{method.icon}</>}
          <div className="flex flex-col space-y-1 mt-1">
            <h4 className="font-semibold text-lg">{method.name}</h4>
            <p className="text-gray-500">{method.description}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <Switch
            onChange={onChange}
            checked={isEnabled}
            onColor="#2563eb"
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </div>
      </div>
    );
}

export default index;
