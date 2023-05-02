import ReactGA from 'react-ga';

const useAnalyticsEventTracker = (category = 'portfolio') => (action = 'test-action', label = 'test-label') => ReactGA.event({ category, action, label });

export default useAnalyticsEventTracker;
