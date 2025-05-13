import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import { fetchAllPlans, fetchSubscriptionsBySchoolId } from "../../api/api";
import { useEffect, useState } from "react";
import { PlanType } from "../../types/types";
import Heading from "../../components/Heading";
import SubscriptionHistory from "./components/SubscriptionHistory";
import SubscriptionPlan from "./components/SubscriptionPlan";
import { SubscriptionType } from "../../types/types";

const Subscription = () => {
  const [plans, setPlans] = useState<PlanType[]>([]);
   const [subscriptions, setSubscriptions] = useState<SubscriptionType[]>([]);
   const [activeSubscription, setActiveSubscription] = useState<SubscriptionType | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      const plans = await fetchAllPlans();

      if (plans.success) {
        console.log(plans);
        setPlans(plans.data);
      }
    };

    fetchPlans();
  }, []);


    useEffect(() => {
    const fetchHistory = async () => {
      const plans = await fetchSubscriptionsBySchoolId();

      if (plans.success) {
        setSubscriptions(plans.data);
        const activeSubscription = plans.data.find(
          (subscription: SubscriptionType) => subscription.status === "active"
        );
        setActiveSubscription(activeSubscription || null);
      }
    };

    fetchHistory();
  }, []);


  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <DashboardHeader />

        <div className="p-5 min-h-screen w-full bg-re">
          <div className="flex flex-col px-20 py-10">
            <Heading headingValue="Subscription Plans">
              <></>
            </Heading>

            <SubscriptionPlan plans={plans} activeSubscription={activeSubscription}/>
          </div>

          <div className="flex flex-col px-20">
            <Heading headingValue="Subscription History">
              <></>
            </Heading>

            <SubscriptionHistory subscriptions={subscriptions}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
