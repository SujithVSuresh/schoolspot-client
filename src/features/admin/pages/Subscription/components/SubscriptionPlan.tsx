import { PlanType, SubscriptionType } from "../../../types/types";
import { Calendar } from "lucide-react";
import { createSubscriptionPaymentRequest } from "../../../api/api";

const SubscriptionPlan = ({
  plans,
  activeSubscription,
}: {
  plans: PlanType[];
  activeSubscription: SubscriptionType;
}) => {


    const handlePayment = async (invoiceId: string, amount: number) => {
      const response = await createSubscriptionPaymentRequest(invoiceId, amount)
      console.log(response, "response from payment")
      if(response.success){
        window.location.href = response.data.url
      }
    }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {plans.map((plan: PlanType) => (
        <div className="w-full bg-white overflow-hidden rounded-xl border">
          <div className="bg-blue-800 p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-100" />
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-white">
                ₹{plan.price}
              </span>
              <span className="ml-2 text-blue-100">
                for {plan.durationInDays} days
              </span>
            </div>
            {/* <p className="mt-2 text-sm text-blue-100">Only ₹34/month</p> */}
          </div>

          <div className="p-6">
            <button
            onClick={() => handlePayment(plan._id as string, plan.price)}
              disabled={
                plan?.name === "Free" || activeSubscription?.planId === plan?._id
              }
              //   onClick={onSubscribe}
              className={`w-full rounded-lg ${
                plan?.name == "Free" || activeSubscription?._id === plan?._id
                  ? "bg-blue-300"
                  : "bg-blue-600 hover:bg-blue-700"
              } px-4 py-3 text-center font-medium text-white focus:outline-none`}
            >
              {activeSubscription?.planId === plan?._id
                ? "Active"
                : "Get Started"}
            </button>

            {/* <p className="mt-4 text-center text-sm text-gray-500">
                      30-day money-back guarantee
                    </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionPlan;
