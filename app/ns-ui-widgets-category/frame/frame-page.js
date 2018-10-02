const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Page Creation", "ns-ui-widgets-category/frame/frame-creation/frame-creation-page"),
    new link("Page Reference", "ns-ui-widgets-category/frame/frame-reference/frame-reference-page"),
    new link("Navigation", "ns-ui-widgets-category/frame/navigation/navigation-page")
];
const navigationLinksTsc = [
    new link("Page Creation", "ns-ui-widgets-category/frame/frame-creation/frame-creation-ts-page"),
    new link("Page Reference", "ns-ui-widgets-category/frame/frame-reference/frame-reference-ts-page"),
    new link("Navigation", "ns-ui-widgets-category/frame/navigation/navigation-ts-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples:false,
        tsclinks: navigationLinksTsc
    });
}
exports.onNavigatingTo = onNavigatingTo;
