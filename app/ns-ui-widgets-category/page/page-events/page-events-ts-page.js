"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onNavigatingTo(args) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}
exports.onNavigatingTo = onNavigatingTo;
function onPageLoaded(args) {
    console.log(args.eventName);
    console.log(args.object);
}
exports.onPageLoaded = onPageLoaded;
function onLayoutChanged(args) {
    console.log(args.eventName);
    console.log(args.object);
}
exports.onLayoutChanged = onLayoutChanged;
function onNavigatedTo(args) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}
exports.onNavigatedTo = onNavigatedTo;
function onNavigatingFrom(args) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}
exports.onNavigatingFrom = onNavigatingFrom;
function onUnloaded(args) {
    console.log(args.eventName);
    console.log(args.object);
}
exports.onUnloaded = onUnloaded;
function onNavigatedFrom(args) {
    console.log(args.eventName);
    console.log(args.object);
    console.log(args.context);
    console.log(args.isBackNavigation);
}
exports.onNavigatedFrom = onNavigatedFrom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1ldmVudHMtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2UtZXZlbnRzLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSx3QkFBK0IsSUFBbUI7SUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBTEQsd0NBS0M7QUFFRCxzQkFBNkIsSUFBZTtJQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBSEQsb0NBR0M7QUFFRCx5QkFBZ0MsSUFBZTtJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBSEQsMENBR0M7QUFFRCx1QkFBOEIsSUFBbUI7SUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBTEQsc0NBS0M7QUFFRCwwQkFBaUMsSUFBbUI7SUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBTEQsNENBS0M7QUFFRCxvQkFBMkIsSUFBZTtJQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBSEQsZ0NBR0M7QUFFRCx5QkFBZ0MsSUFBbUI7SUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBTEQsMENBS0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA+PiBwYWdlLWV2ZW50cy10c1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBOYXZpZ2F0ZWREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGFyZ3MuZXZlbnROYW1lKTtcbiAgICBjb25zb2xlLmxvZyhhcmdzLm9iamVjdCk7XG4gICAgY29uc29sZS5sb2coYXJncy5jb250ZXh0KTtcbiAgICBjb25zb2xlLmxvZyhhcmdzLmlzQmFja05hdmlnYXRpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25QYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGFyZ3MuZXZlbnROYW1lKTtcbiAgICBjb25zb2xlLmxvZyhhcmdzLm9iamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxheW91dENoYW5nZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc29sZS5sb2coYXJncy5ldmVudE5hbWUpO1xuICAgIGNvbnNvbGUubG9nKGFyZ3Mub2JqZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGFyZ3MuZXZlbnROYW1lKTtcbiAgICBjb25zb2xlLmxvZyhhcmdzLm9iamVjdCk7XG4gICAgY29uc29sZS5sb2coYXJncy5jb250ZXh0KTtcbiAgICBjb25zb2xlLmxvZyhhcmdzLmlzQmFja05hdmlnYXRpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nRnJvbShhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgY29uc29sZS5sb2coYXJncy5ldmVudE5hbWUpO1xuICAgIGNvbnNvbGUubG9nKGFyZ3Mub2JqZWN0KTtcbiAgICBjb25zb2xlLmxvZyhhcmdzLmNvbnRleHQpO1xuICAgIGNvbnNvbGUubG9nKGFyZ3MuaXNCYWNrTmF2aWdhdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblVubG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGFyZ3MuZXZlbnROYW1lKTtcbiAgICBjb25zb2xlLmxvZyhhcmdzLm9iamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZEZyb20oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGFyZ3MuZXZlbnROYW1lKTtcbiAgICBjb25zb2xlLmxvZyhhcmdzLm9iamVjdCk7XG4gICAgY29uc29sZS5sb2coYXJncy5jb250ZXh0KTtcbiAgICBjb25zb2xlLmxvZyhhcmdzLmlzQmFja05hdmlnYXRpb24pO1xufVxuLy8gPDwgcGFnZS1ldmVudHMtdHNcbiJdfQ==