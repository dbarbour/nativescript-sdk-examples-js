"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("tns-core-modules/ui/frame");
function navigate() {
    var frame = frame_1.getFrameById("firstFrame");
    frame.navigate("home/second-page");
}
exports.navigate = navigate;
function navigateByModule() {
    var frame = frame_1.getFrameById("my-frame");
    var navigationEntry = {
        moduleName: "home/second-page",
        context: { info: "something you want to pass to your page" },
        animated: false
    };
    frame.navigate(navigationEntry);
}
exports.navigateByModule = navigateByModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcnN0LXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtREFBeUQ7QUFFekQ7SUFJSSxJQUFNLEtBQUssR0FBRyxvQkFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLEtBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUV2QyxDQUFDO0FBUEQsNEJBT0M7QUFNRDtJQUVJLElBQU0sS0FBSyxHQUFHLG9CQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFHdkMsSUFBTSxlQUFlLEdBQW9CO1FBQ3JDLFVBQVUsRUFBRSxrQkFBa0I7UUFDOUIsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLHlDQUF5QyxFQUFFO1FBQzVELFFBQVEsRUFBRSxLQUFLO0tBQ2xCLENBQUM7SUFDRixLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXBDLENBQUM7QUFaRCw0Q0FZQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IGZyYW1lLW5hdmlnYXRlLWJhc2UtdHNcbmltcG9ydCB7IGdldEZyYW1lQnlJZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG4vLyA+PiAoaGlkZSlcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZSgpIHtcbiAgICAvLyA8PCAoaGlkZSlcbiAgICAvLyBFeGFtcGxlIHVzaW5nIGBnZXRGcmFtZUJ5SWQoZnJhbWVJZClgIHRvIGdldCBhIGBGcmFtZWAgcmVmZXJlbmNlXG4gICAgLy8gQXMgYW4gYWx0ZXJuYXRpdmUsIHdlIGNvdWxkIHVzZSBgdG9wbW9zdCgpYCBtZXRob2Qgb3IgYHBhZ2UuZnJhbWVgIHByb3BlcnR5XG4gICAgY29uc3QgZnJhbWUgPSBnZXRGcmFtZUJ5SWQoXCJmaXJzdEZyYW1lXCIpO1xuICAgIGZyYW1lLm5hdmlnYXRlKFwiaG9tZS9zZWNvbmQtcGFnZVwiKTtcbiAgICAvLyA+PiAoaGlkZSlcbn1cbi8vIDw8IChoaWRlKVxuLy8gPDwgZnJhbWUtbmF2aWdhdGUtYmFzZS10c1xuXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW50cnkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVCeU1vZHVsZSgpIHtcbiAgICAvLyA+PiBmcmFtZS1uYXZpZ2F0ZS1tb2R1bGUtdHNcbiAgICBjb25zdCBmcmFtZSA9IGdldEZyYW1lQnlJZChcIm15LWZyYW1lXCIpO1xuXG4gICAgLy8gaW1wb3J0IHsgTmF2aWdhdGlvbkVudHJ5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcbiAgICBjb25zdCBuYXZpZ2F0aW9uRW50cnk6IE5hdmlnYXRpb25FbnRyeSA9IHtcbiAgICAgICAgbW9kdWxlTmFtZTogXCJob21lL3NlY29uZC1wYWdlXCIsXG4gICAgICAgIGNvbnRleHQ6IHsgaW5mbzogXCJzb21ldGhpbmcgeW91IHdhbnQgdG8gcGFzcyB0byB5b3VyIHBhZ2VcIiB9LFxuICAgICAgICBhbmltYXRlZDogZmFsc2VcbiAgICB9O1xuICAgIGZyYW1lLm5hdmlnYXRlKG5hdmlnYXRpb25FbnRyeSk7XG4gICAgLy8gPDwgZnJhbWUtbmF2aWdhdGUtbW9kdWxlLXRzXG59XG4iXX0=