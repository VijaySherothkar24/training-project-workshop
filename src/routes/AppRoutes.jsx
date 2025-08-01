// src/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import UseMemoExample from "../pages/UseMemoExample";
import UseCallbackExample from "../pages/UseCallbackExample";
import CodeSplittingExample from "../pages/CodeSplittingExample";
import MapExample from "../pages/MapExample";
import AnonFunctionsExample from "../pages/AnonFunctionsExample";
import DebounceThrottleExample from "../pages/DebounceThrottleExample";
import ContextExample from "../pages/ContextExample";
import UseTransitionExample from "../pages/UseTransitionExample";
import ComponentTreeExample from "../pages/ComponentTreeExample";
import EffectsScopeExample from "../pages/EffectsScopeExample";
import ImageOptimization from "../pages/ImageOptimization";
import StrictModeEffectPage from "../pages/StrictModeEffectPage";
import Welcome from "../pages/Welcome";
import DebuggingExample from "../pages/DebuggingExample";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Welcome />} />
        <Route path="use-memo" element={<UseMemoExample />} />
        <Route path="use-callback" element={<UseCallbackExample />} />
        <Route path="code-splitting" element={<CodeSplittingExample />} />
        <Route path="map-optimization" element={<MapExample />} />
        <Route path="anon-functions" element={<AnonFunctionsExample />} />
        <Route path="debounce-throttle" element={<DebounceThrottleExample />} />
        <Route path="context" element={<ContextExample />} />
        <Route path="use-transition" element={<UseTransitionExample />} />
        <Route path="component-tree" element={<ComponentTreeExample />} />
        <Route path="effects-scope" element={<EffectsScopeExample />} />
        <Route path="image-optimization" element={<ImageOptimization />} />
        <Route
          path="strict-mode-effect-page"
          element={<StrictModeEffectPage />}
        />
        <Route path="debugging" element={<DebuggingExample />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
