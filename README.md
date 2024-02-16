# QueryCache usages

```txt
invalidateQueries
removeQueries
setQueryData
getQueryData
cancelQueries
clear
getQueries
isFetching
```

```sh
❯ ag "queryCache\.(\w)+" libs
libs/identity-next/phone-administration-add-phone/src/lib/data/use-generate-otp-mutation-wrapper.ts
47:        queryCache.invalidateQueries("get-phone-info");

libs/identity-next/phone-administration-verify-email/src/lib/hooks/use-validate-otp-mutation-wrapper.tsx
27:        queryCache.invalidateQueries("get-phone-info");

libs/ui/global-intent-center/component/src/lib/global-intent-center.tsx
309:        queryCache.removeQueries(["cart-index-get-cart", { id: cartId }], {
486:      queryCache.invalidateQueries("gic-data");

libs/ui/global-header/component/src/lib/mega-menu-button.tsx
64:      queryCache.invalidateQueries("global-header");
107:                queryCache.invalidateQueries("global-header");

libs/ui/global-header/component/src/lib/mobile-header.tsx
170:                    queryCache.invalidateQueries("global-header");

libs/ui/global-header/menu/src/lib/menu.tsx
77:    queryCache.invalidateQueries("global-header");

libs/ui/responsive-header/component/src/lib/responsive-header.tsx
451:                    queryCache.invalidateQueries("global-header");

libs/ui/responsive-header/component/src/lib/desktop-flyout.tsx
143:      queryCache.invalidateQueries("global-header");
208:                queryCache.invalidateQueries("global-header");

libs/home/order-status-tracker/src/lib/order-status-tracker.tsx
66:    queryCache.setQueryData("target-group-id", groupId);

libs/home/redesign-index-page/src/lib/use-aatc-timestamp.ts
26:      queryCache.invalidateQueries("home-tempo-modules");

libs/home/index-page/src/lib/use-aatc-timestamp.ts
26:      queryCache.invalidateQueries("home-tempo-modules");

libs/payments/context/src/lib/hooks/use-update-tender-plan-mutation.ts
109:    //     | undefined = queryCache.getQueryData([
136:        queryCache.setQueryData(
160:        queryCache.cancelQueries("get-tender-plan"); // Do not want to trigger another getTenderPlan call

libs/payments/context/src/lib/hooks/use-update-ebt-balance-mutation-redesign.ts
74:      queryCache.setQueryData(

libs/payments/context/src/lib/hooks/use-wallet-view.tsx
207:      .then(() => queryCache.removeQueries("get-tender-plan"));

libs/payments/context/src/lib/hooks/use-update-ebt-balance-mutation.ts
78:      queryCache.setQueryData(

libs/payments/ebt/src/lib/ebt-balance-check-redesign/modals/ebt-unsaved-changes-modal.tsx
22:    queryCache.removeQueries("get-tender-plan");

libs/payments/paypal/src/lib/hooks/use-common-paypal-callbacks.ts
143:            queryCache.getQueryData([

libs/payments/paypal/src/lib/hooks/use-pba-callbacks.ts
136:          queryCache.getQueryData([

libs/patient-check-in/ui/src/lib/components/landing-page/landing-page.tsx
78:        queryCache.getQueryData(["language-data-by-code", langCode]);

libs/patient-check-in/shared/src/lib/context/language-context-provider.tsx
46:        queryCache.getQueryData(["language-data-by-code", langCode]);

libs/identity/profile-page/src/lib/password-less-selection.tsx
383:      queryCache.invalidateQueries("get-customer-profile");
396:            queryCache.invalidateQueries("get-customer-profile");

libs/identity/profile-page/src/lib/two-factor-authentication-selection.tsx
139:    queryCache.invalidateQueries("get-customer-profile");
153:          queryCache.invalidateQueries("get-customer-profile");

libs/identity/data-access/src/lib/hooks/identity-mutations.ts
194:        queryCache.getQueryData("get-profile");
200:      queryCache.setQueryData(["get-profile"], updatedData);
201:      queryCache.invalidateQueries("get-enhanced-account-details");
232:        queryCache.getQueryData("get-profile");
252:      queryCache.setQueryData(["get-profile"], updatedData);
253:      queryCache.invalidateQueries("get-enhanced-account-details");
284:        queryCache.getQueryData("get-profile");
302:      queryCache.setQueryData(["get-profile"], updatedData);
303:      queryCache.invalidateQueries("get-enhanced-account-details");

libs/lists/details-page/src/lib/logged-in-lists-details.tsx
139:        queryCache.removeQueries([

libs/lists/details-page/src/lib/suggested-items/suggested-items.tsx
57:      queryCache.invalidateQueries(LISTS_DETAILS_PAGE_QUERY_KEY);
64:      queryCache.invalidateQueries(LISTS_LANDING_PAGE_QUERY_KEY);
66:      queryCache.removeQueries(LISTS_DETAILS_PAGE_QUERY_KEY);
67:      queryCache.removeQueries(LISTS_RECOMMENDED_ITEMS_QUERY_KEY);

libs/lists/details-page/src/lib/search-alternative/search-alternative.tsx
71:      queryCache.removeQueries([

libs/lists/save-this-list/src/lib/save-this-list.tsx
68:  const overrides = queryCache.getQueryData<SaveListItemInput[]>(queryKey);

libs/lists/landing-page-data-access/src/lib/hooks/use-get-all-lists.ts
61:        queryCache.getQueryData<CacheError>(allListsCacheKey) || {};
64:        queryCache.removeQueries(allListsCacheKey);

libs/lists/landing-page/src/lib/logged-in-page.tsx
79:      queryCache.invalidateQueries([

libs/lists/common-data-access/src/lib/hooks/use-save-list.ts
45:      queryCache.invalidateQueries("lists-landing-page");
46:      queryCache.invalidateQueries("lists-details-page");

libs/lists/data-access/src/lib/hooks/use-get-all-lists.ts
68:        queryCache.getQueryData<CacheError>(allListsCacheKey) || {};
71:        queryCache.removeQueries(allListsCacheKey);

libs/lists/data-access/src/lib/hooks/use-clear-query-cache.ts
19:    queryCache.invalidateQueries(LISTS_LANDING_PAGE_QUERY_KEY);
21:    queryCache.invalidateQueries(

libs/lists/data-access/src/lib/hooks/use-shared-query-cache-helper.ts
17:      const currentData = queryCache.getQueryData<GetListLandingCache | null>(

libs/lists/data-access/src/lib/hooks/use-create-new-list-gql.ts
64:      queryCache.getQueryData<GetListLandingCache>(primaryCacheKey);
81:      queryCache.setQueryData(primaryCacheKey, newAllLists);
83:      queryCache.invalidateQueries(secondaryCacheKey);

libs/lists/data-access/src/lib/hooks/use-delete-list-gql.ts
56:        queryCache.setQueryData(
62:        queryCache.setQueryData(

libs/lists/data-access/src/lib/hooks/use-add-item-to-list.ts
90:        queryCache.invalidateQueries(LISTS_LANDING_PAGE_QUERY_KEY);
91:        queryCache.invalidateQueries(LISTS_DETAILS_PAGE_QUERY_KEY);

libs/lists/data-access/src/lib/hooks/use-list-details-info.ts
92:        queryCache.getQueryData<CacheError>(listCacheKey) || {};
96:        queryCache.getQueryData<CacheError>(listTotalPriceCacheKey) || {};
99:        queryCache.removeQueries(listCacheKey);
100:        queryCache.removeQueries(listTotalPriceCacheKey);

libs/lists/data-access/src/lib/hooks/use-get-list-details.ts
94:    const cachedData = queryCache.getQueryData<GetListLandingCache | null>([

libs/lists/data-access/src/lib/hooks/use-details-query-cache.ts
44:      const currentData = queryCache.getQueryData(
65:      queryCache.invalidateQueries(
78:      queryCache.invalidateQueries(
91:      queryCache.invalidateQueries(
97:        queryCache.invalidateQueries(getListTotalPriceCacheKey(listId));
101:      queryCache.removeQueries(cacheKey);
107:      queryCache.setQueryData(getListCacheKey(cacheKey), newCache);
110:      queryCache.setQueryData(getListTotalPriceCacheKey(listId), newCache);
121:        queryCache.getQueryData<SaveListItemInput[]>(queryKey);
134:      queryCache.setQueryData(queryKey, updateOverrides);
152:      const currentData = queryCache.getQueryData(
216:      queryCache.setQueryData(queryKey, newCache);
303:      queryCache.removeQueries(({ queryKey }) => {

libs/lists/data-access/src/lib/helpers/query-cache-helpers.ts
75:    queryCache.invalidateQueries(LISTS_LANDING_PAGE_QUERY_KEY);
77:    queryCache.invalidateQueries(LISTS_DETAILS_PAGE_QUERY_KEY);

libs/lists/data-access/src/lib/helpers/local-storage.ts
51:      const currentData = queryCache.getQueryData(

libs/lists/hearting/src/lib/components/cache-checker.tsx
124:    queryCache.removeQueries(GET_HEARTED_ITEMS_QUERY_KEY);

libs/lists/hearting/src/lib/hooks/use-unheart-item-flow.ts
72:          await queryCache.invalidateQueries(LISTS_LANDING_PAGE_QUERY_KEY);
73:          await queryCache.invalidateQueries(
80:          await queryCache.invalidateQueries(

libs/lists/hearting/src/lib/hooks/use-heart-item-flow.ts
83:          await queryCache.invalidateQueries(LISTS_LANDING_PAGE_QUERY_KEY);
84:          await queryCache.invalidateQueries(
90:          await queryCache.invalidateQueries(

libs/repurchase/my-items/src/lib/my-items.tsx
179:    queryCache.getQueryData("my-items-data");
202:  queryCache.setQueryData("my-items-data", myItemsData);

libs/workspace/codemods/src/__tests__/integration/remove-node.spec.ts
13:  afterEach(() => queryCache.clear());
17:  queryCache.clear();
21:  return queryCache.clear();
24:somethingElse(() => queryCache.clear());
34:  code: "queryCache.clear()",

libs/ca/search/typeahead/src/__tests__/integration/typeahead.spec.tsx
76:    queryCache.clear();

libs/global-nav/footer-data-access/src/lib/hooks/use-footer-location-invalidate-query.ts
21:      queryCache.invalidateQueries(enableGIC ? "gic-data" : "footerLocation");

libs/global-nav/external/header/component/src/lib/desktop-flyout.tsx
84:      queryCache.invalidateQueries("global-header");

libs/global-nav/external/header/component/src/lib/header-content.tsx
308:                  queryCache.invalidateQueries("global-header");

libs/global-nav/external/header/menu/src/lib/menu.tsx
41:    queryCache.invalidateQueries("global-header");

libs/marketplace/seller-write-review/src/lib/seller-write-review.tsx
60:  const cachedData: SellerWriteReviewData | undefined = queryCache.getQueryData(
77:  queryCache.setQueryData("seller-write-review-data", sellerWriteReviewData);

libs/marketplace/seller-page/src/lib/seller-page.tsx
75:    queryCache.getQueryData("seller-page-data");
87:  queryCache.setQueryData("seller-page-data", sellerPageData);

libs/discovery/results-page/src/lib/pages/discovery/results-page.tsx
188:    queryCache.getQueryData("generic-data");
217:  queryCache.setQueryData("search-data", { [pageId]: discoveryData });

libs/amends/in-progress-modal/src/lib/use-amend-in-progress-modal.tsx
37:  const cache = queryCache.getQueryData([
106:            queryCache.invalidateQueries("cart-index-get-cart").then(() => {

libs/amends/delivery-instructions-modal/src/lib/index.tsx
121:      queryCache.invalidateQueries("order-by-id");

libs/amends/bookslot/src/lib/use-amendable-order-slots-query-data.ts
34:    queryCache.invalidateQueries("amend-order-slots");

libs/amends/bookslot/src/lib/amend-period-expired/index.tsx
17:    queryCache.invalidateQueries("order-by-id");

libs/amends/bookslot/src/lib/use-reserve-selected-slot.ts
79:      queryCache.invalidateQueries("purchase-contract");
103:      const currentData = queryCache.getQueryData([
115:        queryCache.invalidateQueries("order-by-id");
116:        queryCache.invalidateQueries("purchase-history");
117:        queryCache.invalidateQueries("get-enhanced-account-details");
118:        queryCache.invalidateQueries("get-account-mweb-details");

libs/amends/cart/src/lib/use-add-to-order-handler.ts
240:  const response = queryCache.getQueryData<
266:  const response = queryCache.getQueryData<

libs/amends/cart/src/lib/add-to-order-error-modal.tsx
46:      queryCache.invalidateQueries("cart-index-get-cart");

libs/amends/cart/src/lib/invalidate-queries.ts
4:  queryCache.invalidateQueries("cart-index-get-cart");
5:  queryCache.invalidateQueries("get-amendable-order");
6:  queryCache.invalidateQueries("order-by-id");
7:  queryCache.invalidateQueries("amendable-group-order-by-id");
8:  queryCache.invalidateQueries("get-actionable-orders");

libs/amends/cart/src/lib/amend-unavailable-items-modal/use-unavailable-items-data.ts
30:    queryCache.invalidateQueries("cart-index-get-cart");

libs/amends/cart/src/lib/use-amend-in-progress-alcohol-effect.ts
32:      queryCache.invalidateQueries("get-amendable-order");

libs/amends/add-to-order-fab/src/__tests__/integration/add-to-order-fab.spec.tsx
381:    (queryCache.getQueryData as jest.Mock).mockReturnValueOnce(mockCartCache);

libs/amends/data-access/src/lib/hooks/use-add-to-order-mutation.ts
83:      queryCache.invalidateQueries("cart-index-get-cart").then(() => {
90:      queryCache.invalidateQueries("get-amendable-order");
91:      queryCache.invalidateQueries("order-by-id");
92:      queryCache.invalidateQueries("amendable-group-order-by-id");
93:      queryCache.invalidateQueries("get-actionable-orders");

libs/amends/data-access/src/lib/hooks/use-amend-in-progress-query.ts
37:          queryCache.invalidateQueries("get-amendable-order");
38:          queryCache.invalidateQueries("actionable-orders");
39:          queryCache.invalidateQueries("order-by-id");
40:          queryCache.invalidateQueries("purchase-history");
42:            queryCache.invalidateQueries("amendable-group-order-by-id");

libs/amends/data-access/src/lib/hooks/use-amend-reservation-mutation.ts
42:        queryCache.invalidateQueries("order-by-id");
43:        queryCache.invalidateQueries("amendable-group-order-by-id");
44:        queryCache.invalidateQueries("get-amendable-order");
45:        queryCache.invalidateQueries("get-actionable-orders");
46:        queryCache.invalidateQueries("purchase-history");
47:        queryCache.invalidateQueries("get-enhanced-account-details");
48:        queryCache.invalidateQueries("get-account-mweb-details");

libs/amends/edit-items-page/src/lib/popup-modal/subs-actions.tsx
17:    queryCache.invalidateQueries("get-cart");

libs/amends/edit-items-page/src/lib/popup-modal/index.tsx
44:    queryCache.invalidateQueries("amendable-group-order-by-id");
45:    queryCache.invalidateQueries("order-by-id");

libs/amends/edit-items-page/src/lib/edit-items-util.ts
184:      queryCache.invalidateQueries("amendable-group-order-by-id");

libs/amends/edit-items-page/src/lib/amend-order-save-handler.ts
233:        const currentData = queryCache.getQueryData([

libs/nonprofits/public-profile-page/src/lib/cards/round-up.tsx
146:      queryCache.invalidateQueries(

libs/nonprofits/spark-good-page/src/lib/no-preferred-charity.tsx
24:    queryCache.invalidateQueries("get-nonprofit-spark-good-page");

libs/nonprofits/spark-good-page/src/lib/spark-good-page-coms/preferred-charity-container.tsx
47:      queryCache.invalidateQueries("get-nonprofit-spark-good-page");

libs/nonprofits/spark-good-page/src/lib/spark-good-page-coms/preferred-charity.tsx
74:    queryCache.invalidateQueries("get-nonprofit-spark-good-page");

libs/nonprofits/org-profile-page/src/lib/logo-update-com.tsx
58:      queryCache.invalidateQueries("get-nonprofit-organization-media");

libs/nonprofits/org-profile-page/src/lib/modals/profile-image-modal.tsx
104:      queryCache.invalidateQueries("get-nonprofit-organization-media");

libs/nonprofits/org-profile-page/src/lib/org-profile-com.tsx
78:      queryCache.invalidateQueries("get-nonprofit-organization-profile");

libs/journey/layout/src/lib/hooks/index.tsx
48:      queryCache.invalidateQueries("GetBookSlotPage");
83:        queryCache.invalidateQueries(queryName);
85:        queryCache.invalidateQueries("item-by-id");
86:        queryCache.invalidateQueries("item-by-id-btf");
88:        queryCache.invalidateQueries("home-tempo-modules");

libs/wplus/plan-views/src/lib/inhome-membership-view.tsx
150:              .then(() => queryCache.invalidateQueries("GetMembershipPlans"));

libs/wplus/data-access/src/lib/hooks/use-cancel-membership.ts
33:      queryCache.invalidateQueries("get-account-details");

libs/wplus/data-access/src/lib/hooks/use-update-membership.ts
43:        queryCache.invalidateQueries("get-account-details");
44:        queryCache.invalidateQueries(MEMBERSHIP_DETAILS);
45:        queryCache.invalidateQueries(MANAGE_MEMBERSHIP);
46:        queryCache.invalidateQueries(MANAGE_PLUS_UPS);

libs/wplus/data-access/src/lib/hooks/use-update-addOns.ts
39:        queryCache.invalidateQueries(MEMBERSHIP_DETAILS);
40:        queryCache.invalidateQueries(MANAGE_MEMBERSHIP);
41:        queryCache.invalidateQueries(MANAGE_PLUS_UPS);

libs/wplus/data-access/src/lib/hooks/use-convert-membership.ts
36:        queryCache.invalidateQueries("get-account-details");

libs/wplus/data-access/src/lib/hooks/use-create-membership.ts
107:        queryCache.invalidateQueries("get-account-details");

libs/wplus/data-access/src/lib/hooks/use-create-inhome-lead.ts
33:        queryCache.invalidateQueries("InHomeCreateLead");

libs/wplus/data-access/src/lib/hooks/use-extend-membership.ts
34:      queryCache.invalidateQueries("get-account-details");

libs/wplus/data-access/src/lib/hooks/use-update-membership-pause-status.ts
44:        queryCache.invalidateQueries(PAUSE_MEMBERSHIP_DETAILS);
45:        queryCache.invalidateQueries("get-account-details");
46:        queryCache.invalidateQueries(MEMBERSHIP_DETAILS);
47:        queryCache.invalidateQueries(MANAGE_MEMBERSHIP);
48:        queryCache.invalidateQueries(MANAGE_PLUS_UPS);

libs/wplus/data-access/src/lib/hooks/use-update-billing-date.ts
49:        queryCache.invalidateQueries(MEMBERSHIP_DETAILS);
50:        queryCache.invalidateQueries(MANAGE_MEMBERSHIP);
51:        queryCache.invalidateQueries("GetCommPreference");
52:        queryCache.invalidateQueries("GetMembershipPlans");
53:        queryCache.invalidateQueries("GetSplashAccountData");
54:        queryCache.invalidateQueries("get-account-details");
55:        queryCache.invalidateQueries("get-membership");

libs/checkout/store-chooser/src/lib/hooks/use-save-store-set-pickup.ts
187:      queryCache.invalidateQueries("get-slots"); // Invlidates all queries for discovery to refect relevant location data
188:      queryCache.invalidateQueries("home-tempo-modules");
189:      queryCache.invalidateQueries("GetBookSlotPage");
190:      queryCache.invalidateQueries("item-by-id");
191:      queryCache.invalidateQueries("offer-by-id");
192:      queryCache.invalidateQueries("search-query");
193:      queryCache.invalidateQueries("browse-query");
194:      queryCache.invalidateQueries("lists-details-page");
195:      queryCache.invalidateQueries("registry-details-page");
196:      queryCache.invalidateQueries("my-items-query");
197:      queryCache.invalidateQueries("global-header");
198:      queryCache.invalidateQueries("cart-get-slots");

libs/checkout/store-chooser/src/lib/hooks/use-save-store-set-delivery.ts
138:      queryCache.invalidateQueries("get-slots"); // Invlidates all queries for discovery to refect relevant location data
139:      queryCache.invalidateQueries("home-tempo-modules");
140:      queryCache.invalidateQueries("GetBookSlotPage");
141:      queryCache.invalidateQueries("item-by-id");
142:      queryCache.invalidateQueries("offer-by-id");
143:      queryCache.invalidateQueries("search-query");
144:      queryCache.invalidateQueries("browse-query");
145:      queryCache.invalidateQueries("lists-details-page");
146:      queryCache.invalidateQueries("registry-details-page");
147:      queryCache.invalidateQueries("my-items-query");
148:      queryCache.invalidateQueries("global-header");
149:      queryCache.invalidateQueries("cart-get-slots");

libs/checkout/bookslot-cart-page-tests/src/__tests__/integration/integrated-signup-banner.spec.tsx
1126:          queryCache.setQueryData(["get-account-details", {}], {

libs/checkout/petrx/src/lib/hooks/use-add-pet-vet.ts
57:      queryCache.invalidateQueries("get-account-pet-hub-all-pets");
84:      queryCache.invalidateQueries("get-account-pet-hub-all-vets");

libs/checkout/review-order-page/src/lib/postpaid-agreement/download-all.tsx
85:          cacheData: queryCache.getQueryData([

libs/checkout/review-order-page/src/lib/review-order-body-dweb.tsx
674:                    queryCache.invalidateQueries("get-slots");

libs/checkout/charity-banner/src/lib/charity-banner.tsx
80:          queryCache.invalidateQueries("get-charity-of-choice");

libs/checkout/charity-banner/src/lib/panels/charity-selection.tsx
96:      queryCache.invalidateQueries("nonprofit-organization-geolocation");

libs/checkout/bookslot/src/lib/alerts/get-alerts.ts
988:              queryCache.invalidateQueries("get-slots");
989:              queryCache.invalidateQueries("amend-order-slots");

libs/checkout/bookslot/src/lib/hooks/use-cart-bookslot-state.ts
77:    queryCache.removeQueries(["cart-index-get-cart", { id: cartId }], {

libs/checkout/bookslot/src/lib/fulfillment-modal-container/fulfillment-modal-container.tsx
120:    queryCache.invalidateQueries("get-slots"); // Invlidates all queries for discovery to refect relevant location data
121:    queryCache.invalidateQueries("home-tempo-modules");
122:    queryCache.invalidateQueries("item-by-id");
123:    queryCache.invalidateQueries("offer-by-id");
124:    queryCache.invalidateQueries("lists-details-page");
125:    queryCache.invalidateQueries("registry-details-page");
126:    queryCache.invalidateQueries("search-query");
127:    queryCache.invalidateQueries("my-items-query");
128:    queryCache.invalidateQueries("global-header");
320:                      queryCache.invalidateQueries("get-slots");
321:                      queryCache.invalidateQueries("cart-get-slots");

libs/checkout/promotions/src/lib/promotions.tsx
144:        queryCache.setQueryData(

libs/checkout/review-order-data-access/src/lib/hooks/use-get-combine-membership-queries.ts
110:      initialData: queryCache.getQueryData(["get-membership", variables]),

libs/checkout/review-order-data-access/src/lib/hooks/use-update-payments-mutation.ts
82:            queryCache.setQueryData(
116:            queryCache.invalidateQueries("checkout-review-update-payment");

libs/checkout/bookslot-data-access/src/lib/hooks/use-save-slot.ts
253:      queryCache.setQueryData(
262:        queryCache.invalidateQueries("cart-get-slots");

libs/checkout/bookslot-shared/src/lib/hooks/use-prefetch-account-landing.ts
26:        const cachedData = queryCache.getQueryData<
34:          queryCache.invalidateQueries("get-account-details");

libs/subscription/subscription-panel/src/lib/subscription-panel.tsx
63:      queryCache.invalidateQueries("item-by-id");
64:      queryCache.invalidateQueries("item-by-id-btf");

libs/search/results-page/src/lib/hooks/search-gic-hooks.ts
62:      queryCache.invalidateQueries(queryName);

libs/search/results-page/src/lib/pages/deals/results-page.tsx
258:    queryCache.getQueryData("deals-data");
296:    queryCache.getQueryData("deals-mosaic-data");
371:  queryCache.setQueryData(
376:  queryCache.setQueryData(

libs/search/results-page/src/lib/pages/topic/results-page.tsx
190:    queryCache.getQueryData("topic-data");
233:  queryCache.setQueryData("topic-data", { [searchTerm]: topicData });

libs/search/results-page/src/lib/pages/search/results-page.tsx
258:    queryCache.getQueryData("search-data");
351:  queryCache.setQueryData("search-data", { [searchTerm]: searchData });

libs/search/results-page/src/lib/pages/browse/results-page.tsx
163:      queryCache.invalidateQueries("browse-query");
261:    queryCache.getQueryData("browse-data");
319:  queryCache.setQueryData("browse-data", { [catId]: browseData });

libs/search/data-access/src/__tests__/unit/use-search-term-with-filters.spec.tsx
22:      queryCache.setQueryData(

libs/search/data-access/src/hooks/search-filters/hooks/use-search-term-with-filters.ts
42:      const orderCache = queryCache.getQueryData([

libs/b2b/plus-page/src/lib/logged-in-wrapper.tsx
133:      queryCache.invalidateQueries(["member-of"]);

libs/b2b/cart/data-access/src/lib/hooks/continue-checkout-button-action.tsx
32:    initialData: queryCache.getQueryData("organization-on-boarding-status"),

libs/b2b/orders/purchase-history/index-page/src/lib/logged-in-state.tsx
32:        queryCache.getQueryData("purchase-history-page");
44:      queryCache.invalidateQueries(DEFAULT_PH_QUERY_KEY);
83:      queryCache.setQueryData("purchase-history-page", {

libs/b2b-journey/account/org-page/src/lib/create-org-page.tsx
620:          queryCache.invalidateQueries("organization-on-boarding-status");

libs/b2b-journey/account/org-page/src/lib/org-page.tsx
60:          queryCache.invalidateQueries("organization-on-boarding-status");

libs/b2b-journey/account/manage-user-page/src/lib/manage-user-page.tsx
81:      queryCache.invalidateQueries(["organization-users"]);

libs/item/fitment/fitment-widget/src/lib/vehicle-modal.tsx
388:              queryCache.removeQueries("search-query", { exact: false });
389:              queryCache.removeQueries("item-by-id", { exact: false });
427:            queryCache.removeQueries("search-query", { exact: false });
428:            queryCache.removeQueries("item-by-id", { exact: false });
429:            queryCache.removeQueries("content-page", { exact: false });

libs/item/fitment/fitment-widget/src/lib/fitment-search-initial-screen.tsx
326:                        queryCache.removeQueries("search-query", {
329:                        queryCache.removeQueries("item-by-id", {
332:                        queryCache.removeQueries("content-page", {

libs/item/detail-page/src/__tests__/integration/refetch-invalidated-query.spec.tsx
84:      spy.current.queryCache.invalidateQueries("item-by-id");
85:      spy.current.queryCache.invalidateQueries("item-by-id-btf");

libs/item/detail-page/src/lib/detail-page.tsx
437:  // const searchCache = queryCache.getQueryData("search-results") as SearchCache;
677:    queryCache.setQueryData("is-variant-fetching", true);
690:    queryCache.getQueryData("is-variant-fetching")
738:      // queryCache.invalidateQueries(["item-by-id-btf", { lazyModules: [] }]);

libs/item/zeekit/data-access/src/lib/hooks/use-sync-fashion-preferences-mutation.ts
27:      queryCache.invalidateQueries("get-account-fashion-profile");

libs/item/reviews/write-review/write-review-page/src/lib/index.tsx
348:    queryCache.invalidateQueries("write-review-by-id");

libs/item/reviews/multi-item-review/page/src/lib/multi-item-review-list.tsx
50:    queryCache.getQueryData("multi-reviews-data");
60:  queryCache.setQueryData("multi-reviews-data", multiReviewsData);

libs/item/reviews/reviews-page/src/lib/reviews-page.tsx
85:  const cachedData: any | undefined = queryCache.getQueryData("reviews-data");
99:  queryCache.setQueryData("reviews-data", reviewsData);

libs/item/reviews/question-answer-page/src/lib/answer-question-page.tsx
83:  const cachedQData: any | undefined = queryCache.getQueryData(
107:  const cachedData: any | undefined = queryCache.getQueryData(
121:  queryCache.setQueryData("answer-question-data", itemDetailsData);

libs/item/reviews/question-answer-page/src/lib/question-answer-page.tsx
77:  const cachedData: any | undefined = queryCache.getQueryData(
94:  queryCache.setQueryData("question-answer-data", questionData);

libs/item/reviews/question-answer-page/src/lib/ask-question-page.tsx
84:  const cachedData: any | undefined = queryCache.getQueryData(
104:  queryCache.setQueryData("answer-question-data", itemDetailsData);

libs/digital-finance/one-debit-card/components/src/lib/one-debit-card-modal.tsx
113:          queryCache.invalidateQueries("get-wallet-payments");

libs/wallet/landing-page/src/lib/dvr-state/remove-dvr-confirm-modal.tsx
44:        queryCache.setQueryData(["get-account-dvr"], updatedDVRData);

libs/wallet/payment-card-tile/src/lib/ebt-card-tile-container.tsx
100:    queryCache.invalidateQueries("ebt-card-balance");

libs/wallet/data-access/src/lib/hooks/use-link-associate-discount.ts
60:      queryCache.setQueryData("get-associate-info", null);

libs/wallet/data-access/src/lib/helpers/update-cache.ts
8:  const cachedData = queryCache.getQueryData<T2>(queryKey);
12:      queryCache.setQueryData(queryKey, updatedData);

libs/wallet/data-access/src/lib/hooks/use-on-success-handlers.ts
33:    queryCache.invalidateQueries(getWalletCacheKey);
37:    queryCache.invalidateQueries(getWalletCacheKey);
38:    queryCache.invalidateQueries("get-account-details");
66:    queryCache.invalidateQueries(getWalletCacheKey);
73:    queryCache.invalidateQueries(getWalletCacheKey);

libs/cart/hot-pac/src/lib/hooks/use-set-fulfillment-intent-pac.tsx
42:          queryCache.removeQueries(["cart-index-get-cart", { id: cartId }], {

libs/cart/modal-container/src/lib/last-call-modal.tsx
121:      queryCache.removeQueries("last-call");

libs/cart/shop-similar/src/lib/replace-shop-similar.tsx
126:    queryCache.setQueryData("cart-shop-similar", undefined);
127:    queryCache.invalidateQueries("cart-shop-similar");

libs/cart/panel/src/lib/panel.tsx
87:    queryCache.removeQueries("last-call");

libs/cart/index-page/src/lib/cart-index-page.tsx
889:    queryCache.removeQueries(["cart-index-get-cart", { id: cartData?.id }], {

libs/cart/index-page/src/lib/cart-smart-nudge.tsx
129:              queryCache.setQueryData("smart-nudges", null);

libs/cart/data-access-core/src/lib/hooks/delete-sfl-items.tsx
30:      queryCache.setQueryData(

libs/cart/data-access-core/src/lib/hooks/update-shipping-options.tsx
108:      queryCache.setQueryData(
123:      queryCache.invalidateQueries("cart-index-get-cart");
152:          queryCache.invalidateQueries("cart-get-slots");

libs/cart/data-access-core/src/lib/hooks/update-gifting.tsx
104:      queryCache.cancelQueries("cart-index-get-cart");
105:      const previousValue = queryCache.getQueryData("cart-index-get-cart");
113:      queryCache.setQueryData("cart-index-get-cart", previousValue);
159:      queryCache.setQueryData(

libs/cart/sfl-container/src/lib/cart-sfl-container.tsx
227:    // Check data from useGetSFL or queryCache.getQueryData("cart-index-sfl").
233:    queryCache.setQueryData("cart-index-sfl", undefined);
234:    queryCache.invalidateQueries("cart-index-sfl");
273:      queryCache.setQueryData("cart-index-sfl", undefined);
274:      queryCache.invalidateQueries("cart-index-sfl");
512:        queryCache.invalidateQueries("cart-get-slots");

libs/cart/panel-ui/src/lib/ui/Header.tsx
39:      queryCache.invalidateQueries("get-slots");
40:      queryCache.invalidateQueries("cart-get-slots");

libs/cart/item-updates-container/src/lib/oos-tile-components/substitutions/replace-oos.tsx
223:    queryCache.setQueryData("cart-substitutions", undefined);
224:    queryCache.invalidateQueries("cart-substitutions");

libs/cart/address-modal/src/lib/useAddressInfo.tsx
104:      queryCache.removeQueries(["get-addresses", "storeDeliverable"]);

libs/cart/data-access/src/__tests__/unit/use-merge-order-and-cart-mutation.spec.tsx
115:    expect(queryCache.invalidateQueries).toBeCalledTimes(3);
116:    expect(queryCache.invalidateQueries).toBeCalledWith("get-account-details");
117:    expect(queryCache.invalidateQueries).toBeCalledWith("purchase-history", {
120:    expect(queryCache.invalidateQueries).toBeCalledWith("order-by-id");

libs/cart/data-access/src/__tests__/unit/update-fulfillment-option.spec.tsx
200:      queryCache.getQueryData([

libs/cart/data-access/src/lib/hooks/add-sfl-items.tsx
26:      queryCache.setQueryData(

libs/cart/data-access/src/lib/hooks/get-cart.ts
77:          queryCache.getQueryData([
83:        queryCache.setQueryData(

libs/cart/data-access/src/lib/hooks/update-opt-in-status.tsx
132:      queryCache.setQueryData(
137:        queryCache.invalidateQueries("cart-get-slots");

libs/cart/data-access/src/lib/hooks/set-gifting-address.tsx
97:      queryCache.cancelQueries("cart-index-get-cart");
98:      const previousValue = queryCache.getQueryData("cart-index-get-cart");
114:      queryCache.setQueryData("cart-index-get-cart", previousValue);
148:      queryCache.setQueryData(

libs/cart/data-access/src/lib/hooks/cart-context.tsx
339:        queryCache.removeQueries(["cart-index-get-cart", { id: cartId }], {

libs/cart/data-access/src/lib/hooks/update-fulfillment-option.tsx
198:        queryCache.setQueryData(
222:      queryCache.setQueryData(["smart-nudges"], undefined);
223:      queryCache.invalidateQueries("cart-get-slots");

libs/cart/data-access/src/lib/hooks/update-fulfillment-and-move-to-sfl.tsx
164:      queryCache.setQueryData(

libs/cart/data-access/src/lib/hooks/set-delivery-store.tsx
91:      queryCache.cancelQueries("cart-index-get-cart");
92:      const previousValue = queryCache.getQueryData("cart-index-get-cart");
109:      queryCache.setQueryData("cart-index-get-cart", previousValue);
152:      queryCache.setQueryData(

libs/cart/data-access/src/lib/hooks/update-items.tsx
395:        queryCache.getQueryData([
420:        queryCache.invalidateQueries("cart-index-get-cart");
447:            queryCache.setQueryData(
464:            queryCache.removeQueries("cart-index-get-cart", {
483:            queryCache.setQueryData(
492:              queryCache.setQueryData(
497:              queryCache.removeQueries(["cart-index-get-cart", { id }], {
502:            queryCache.setQueryData(
556:          queryCache.invalidateQueries("cart-get-slots");

libs/cart/data-access/src/lib/hooks/use-merge-order-and-cart-mutation.ts
32:        queryCache.invalidateQueries("get-account-details");
33:        queryCache.invalidateQueries("purchase-history", {
39:        queryCache.invalidateQueries("order-by-id");

libs/cart/data-access/src/lib/hooks/set-delivery.tsx
96:      queryCache.cancelQueries("cart-index-get-cart");
97:      const previousValue = queryCache.getQueryData("cart-index-get-cart");
105:      queryCache.setQueryData("cart-index-get-cart", previousValue);
138:      queryCache.setQueryData(

libs/cart/data-access/src/lib/hooks/save-for-later.tsx
139:      queryCache.setQueryData(
148:      queryCache.invalidateQueries("cart-index-get-cart");
180:            queryCache.setQueryData(
241:        queryCache.invalidateQueries("cart-get-slots");

libs/cart/data-access/src/lib/hooks/panel-cart-context.tsx
743:    queryCache.setQueryData(["smart-nudges"], undefined);

libs/cart/data-access/src/lib/hooks/set-pickup.tsx
96:      queryCache.cancelQueries("cart-index-get-cart");
97:      const previousValue = queryCache.getQueryData("cart-index-get-cart");
105:      queryCache.setQueryData("cart-index-get-cart", previousValue);
138:      queryCache.setQueryData(

libs/cart/data-access/src/lib/hooks/merge-cart-navigate.ts
105:        queryCache.invalidateQueries("cart-index-get-cart").then(() => {
112:        queryCache.removeQueries(["cart-index-get-cart", { id: cartId }], {

libs/cart/data-access/src/lib/hooks/move-sfl-to-cart.tsx
134:      queryCache.setQueryData(
150:      queryCache.invalidateQueries("cart-index-get-cart");
177:            queryCache.setQueryData(

libs/cart/data-access/src/lib/hooks/last-call.tsx
34:    queryCache.getQueryData("smart-nudges");

libs/cart/data-access/src/lib/hooks/merge-cart.ts
152:          queryCache.setQueryData(

libs/registry/create-page/src/lib/create-form-page/submit-form.ts
135:      queryCache.invalidateQueries(CREATE_REGISTRY_FLOW_INFO_QUERY_KEY);

libs/registry/details-page/src/lib/module-view-tile-context.tsx
86:    const currentData = queryCache.getQueryData([

libs/registry/details-page/src/lib/hooks/use-registry-details-cache.tsx
14:    queryCache.removeQueries(REGISTRY_DETAILS_PAGE_QUERY_KEY);
18:    queryCache.invalidateQueries(REGISTRY_DETAILS_PAGE_QUERY_KEY);
22:    queryCache.removeQueries((cache) => {

libs/registry/details-page/src/lib/details-page.tsx
115:      const detailsCacheData = queryCache.getQueries([
126:      queryCache.setQueryData(
155:      queryCache.removeQueries(REGISTRY_DETAILS_PAGE_QUERY_KEY);

libs/registry/details-page/src/lib/item-tile/item-purchase-information.tsx
224:                                    queryCache.invalidateQueries(

libs/registry/giving-search-page/src/lib/giving-search-module/giving-search-module.tsx
91:      queryCache.invalidateQueries(FIND_RISE_REGISTRIES);

libs/registry/data-access/src/lib/hooks/use-get-registry-details.ts
117:    const cache = queryCache.getQueryData<GqlResponse<RegistryDetails>>([
130:  const cache = queryCache.getQueryData<GqlResponse<RegistryDetails>>(

libs/registry/data-access/src/lib/hooks/use-update-registry.ts
37:  queryCache.invalidateQueries(REGISTRY_LANDING_PAGE_QUERY_KEY);
50:  const cache = queryCache.getQueryData<GqlResponse<RegistryDetails>>(queryKey);
54:    queryCache.invalidateQueries(REGISTRY_DETAILS_PAGE_QUERY_KEY);
80:  queryCache.setQueryData(queryKey, newCache);

libs/registry/data-access/src/lib/hooks/use-create-registry.ts
57:      queryCache.invalidateQueries(REGISTRY_LANDING_PAGE_QUERY_KEY);

libs/registry/data-access/src/lib/hooks/use-delete-registry.ts
52:        queryCache.setQueryData(
56:        queryCache.setQueryData(
76:        queryCache.setQueryData(
81:      queryCache.removeQueries([
85:      queryCache.removeQueries(REGISTRY_DETAILS_PAGE_QUERY_KEY);

libs/registry/data-access/src/lib/hooks/use-update-registry-item-quantity.ts
59:  const cache = queryCache.getQueryData<GqlResponse<RegistryDetails>>(queryKey);
63:    queryCache.invalidateQueries(REGISTRY_DETAILS_PAGE_QUERY_KEY);
114:  queryCache.setQueryData(queryKey, newCache);
148:      queryCache.removeQueries(REGISTRY_PURCHASE_DETAILS_QUERY_KEY);

libs/registry/data-access/src/lib/hooks/use-add-item-to-registry.ts
60:      queryCache.invalidateQueries(REGISTRY_LANDING_PAGE_QUERY_KEY);
62:        queryCache.invalidateQueries(REGISTRY_DETAILS_PAGE_QUERY_KEY);

libs/registry/data-access/src/lib/hooks/use-shared-query-cache-helper.ts
20:        queryCache.getQueryData<GetRegistryLandingCache | null>(cacheKey);
39:        queryCache.getQueryData<GetCategorizedRegistryLandingCache | null>(

libs/registry/data-access/src/lib/hooks/use-delete-registry-item.ts
43:  queryCache.invalidateQueries(REGISTRY_LANDING_PAGE_QUERY_KEY);
44:  queryCache.invalidateQueries(REGISTRY_PURCHASE_DETAILS_QUERY_KEY);
57:  const cache = queryCache.getQueryData<GqlResponse<RegistryDetails>>(queryKey);
61:    queryCache.invalidateQueries(REGISTRY_DETAILS_PAGE_QUERY_KEY);
83:  queryCache.setQueryData(queryKey, newCache);

libs/registry/data-access/src/lib/hooks/use-get-charity-of-choice-user-info.ts
89:      : queryCache.getQueryData(GET_NONPROFIT_MY_CHOICE_QUERY_KEY);

libs/registry/data-access/src/lib/hooks/use-update-charity-of-choice.ts
47:      queryCache.setQueryData(GET_NONPROFIT_MY_CHOICE_QUERY_KEY, newCache);

libs/mx/journey/home-page/src/__tests__/unit/invalidate-global-header-query.spec.ts
27:    expect(queryCache.invalidateQueries).toHaveBeenCalledWith([
35:    expect(queryCache.invalidateQueries).not.toHaveBeenCalled();

libs/mx/journey/home-page/src/lib/helper/home-page-helper.ts
24:  const modules = queryCache.getQueryData<GqlResponse<HeaderQueryResult>>([

libs/mx/journey/home-page/src/lib/hooks/use-invalidate-global-header-query.ts
11:    queryCache.invalidateQueries(["global-header"]);

libs/mx/account/invoice-address-panel/src/lib/address-form.tsx
36:    queryCache.invalidateQueries(["get-invoice-addresses"]);

libs/orders/cancellation/edit-items/src/lib/cancellation-edit-items.tsx
224:            queryCache.invalidateQueries("order-by-id");
254:          queryCache.invalidateQueries("order-by-id");

libs/orders/ui/tempo-modules/src/lib/utils.ts
46:      queryCache.invalidateQueries("purchase-history-tempo-modules");

libs/orders/details-page/src/lib/cancel-return-cta.tsx
77:      queryCache.invalidateQueries("order-by-id");

libs/orders/details-page/src/lib/return-details/pickup-schedule-dialog.tsx
38:        queryCache.invalidateQueries(["order-by-id", { orderId }]);

libs/orders/details-page/src/lib/order-items-list.tsx
111:      queryCache.invalidateQueries(["order-by-id", { orderId }]);

libs/orders/details-page/src/lib/details-page.tsx
118:      queryCache.getQueryData("target-group-id");
153:  const acceptRejectResponse = queryCache.getQueryData("accept-reject");
154:  queryCache.removeQueries("accept-reject");

libs/orders/order-status-tracker/src/lib/order-status-tracker.tsx
195:      queryCache.invalidateQueries("amendable-group-order-by-id");

libs/orders/reshop/src/lib/hooks/use-reshop-effects.tsx
119:      queryCache.invalidateQueries(ORDER_BY_ID_QUERY_KEY);

libs/orders/reshop/src/lib/hooks/use-ship-unavailable-items-confirm.tsx
168:          queryCache.invalidateQueries(ORDER_BY_ID_QUERY_KEY);

libs/orders/accept-reject/substitutions/src/lib/substitutions.tsx
137:          queryCache.invalidateQueries(QUERY_KEY);
138:          queryCache.setQueryData("accept-reject", isSuccess);

libs/orders/purchase-history/index-page/src/lib/logged-in-state.tsx
41:      queryCache.setQueryData(PURCHASE_HISTORY_PAGE, {
47:        queryCache.getQueryData(PURCHASE_HISTORY_PAGE);
60:        queryCache.invalidateQueries(DEFAULT_PH_QUERY_KEY);
133:      queryCache.setQueryData(PURCHASE_HISTORY_PAGE, {

libs/orders/purchase-history/index-page/src/__tests__/integration/logged-in-state.spec.tsx
22:  await waitFor(() => expect(queryCache.isFetching).toBe(0));

libs/orders/purchase-history/components/src/lib/orders-card-desktop-header.tsx
100:              queryCache.invalidateQueries("order-by-id");
102:                queryCache.setQueryData("target-group-id", groupId);

libs/orders/purchase-history/components/src/lib/orders-card.tsx
82:    queryCache.invalidateQueries("order-by-id");

libs/orders/shopper-substitutions-page/src/lib/hooks/use-accept-reject.ts
68:        queryCache.setQueryData(

libs/orders/tip/page/src/lib/components/tip-container.tsx
25:      queryCache.invalidateQueries("order-and-feedback");

libs/orders/tip/page/src/lib/components/thankyou.tsx
96:      queryCache.invalidateQueries("order-by-id");

libs/orders/returns/return-details/src/lib/details-dialog.tsx
95:            queryCache.invalidateQueries("return-details");
96:            queryCache.invalidateQueries("guest-return-details");
97:            queryCache.invalidateQueries("registry-return-details");

libs/orders/returns/return-details/src/lib/return-details.tsx
73:    queryCache.invalidateQueries(queryKey);
81:      queryCache.invalidateQueries(queryKey);

libs/orders/returns/store-locator/src/lib/component/zip-input/index.tsx
33:        queryCache.invalidateQueries(["store-locator"]);

libs/orders/returns/index-page/src/lib/context.tsx
239:    queryCache.removeQueries("return-rules", { exact: true });
243:    queryCache.invalidateQueries(["order-by-id", { orderId }]);

libs/orders/data-access/src/lib/hooks/use-get-guest-order-query.ts
37:      queryCache.setQueryData(

libs/account/location-clarity/src/lib/views/address-form.tsx
38:    queryCache.invalidateQueries(["get-addresses", "storeDeliverable"]);

libs/account/account-page/src/lib/order-status-tracker/active-order-status.tsx
75:    queryCache.setQueryData("target-group-id", groupId);

libs/account/address-form/src/lib/delivery-address-form/delivery-address-form-base.tsx
378:          queryCache.invalidateQueries("get-addresses");

libs/account/communications-and-privacy/src/lib/marketing-mail-address/update-mail-preference.tsx
59:      const previousMarketingPrivacyData = queryCache.getQueryData([
66:      queryCache.setQueryData(

libs/account/communications-and-privacy/src/lib/marketing-mail-address/marketing-address-form.tsx
63:        const previousMarketingPrivacyData = queryCache.getQueryData([
70:        queryCache.setQueryData(

libs/account/pet-hub-page/src/lib/pet-side-panel.tsx
87:      queryCache.invalidateQueries(GET_ALL_PETS_QUERY);
114:    queryCache.invalidateQueries(GET_ALL_PETS_QUERY);
120:    queryCache.invalidateQueries(GET_ALL_PETS_QUERY);
151:    queryCache.invalidateQueries("get-account-pet-hub-all-vets");

libs/account/pet-hub-page/src/lib/pet-hub-body.tsx
84:      queryCache.invalidateQueries("get-account-pet-hub-all-pets");

libs/account/pet-hub-page/src/lib/vet-list.tsx
33:      queryCache.invalidateQueries("get-account-pet-hub-all-vets");

libs/account/enhanced-account/src/lib/phone-collection-wrapper/phone-collection-wrapper.tsx
35:            queryCache.invalidateQueries("get-enhanced-account-details");
36:            queryCache.invalidateQueries("get-account-details");

libs/account/data-access/src/lib/account-provider.tsx
18:  if (initialData && !queryCache.getQueryData("get-account-details")) {
19:    queryCache.setQueryData(["get-account-details", {}], initialData);

libs/account/data-access/src/lib/hooks/create-or-update-invoice-address-hook.ts
118:        await queryCache.invalidateQueries("get-enhanced-account-details");

libs/account/data-access/src/lib/hooks/use-delete-address.ts
56:        await queryCache.invalidateQueries("get-enhanced-account-details");

libs/account/data-access/src/lib/hooks/create-or-update-address-hook.ts
225:        await queryCache.invalidateQueries("get-enhanced-account-details");

libs/account/data-access/src/lib/hooks/set-fulfillment-hook.ts
49:      queryCache.invalidateQueries("get-slots");
50:      queryCache.invalidateQueries("home-tempo-modules");
51:      queryCache.invalidateQueries("item-by-id");
52:      queryCache.invalidateQueries("offer-by-id");
53:      queryCache.invalidateQueries("search-query");
55:      queryCache.invalidateQueries("lists-details-page");
56:      queryCache.invalidateQueries("registry-details-page");
57:      queryCache.invalidateQueries("my-items-query");
58:      queryCache.invalidateQueries("cart-get-slots");
67:        queryCache.setQueryData(

libs/account/data-access/src/lib/hooks/update-postal-code-hook.ts
84:      queryCache.removeQueries(
90:      queryCache.invalidateQueries("get-slots");
91:      queryCache.invalidateQueries("home-tempo-modules");
92:      queryCache.invalidateQueries("item-by-id");
93:      queryCache.invalidateQueries("offer-by-id");
94:      queryCache.invalidateQueries("search-query");
95:      queryCache.invalidateQueries("lists-details-page");
96:      queryCache.invalidateQueries("registry-details-page");

libs/account/data-access/src/lib/hooks/use-get-account-landing.ts
28:  const cachedData = queryCache.getQueryData<
40:    queryCache.invalidateQueries("get-account-details");

libs/wmhealth/layout/src/lib/health-menu/menu/sub-menu.tsx
54:      await queryCache.invalidateQueries("validate-patient");

libs/wmhealth/shared/src/lib/appointments/manage-appointment-dialog-content.tsx
39:    await queryCache.invalidateQueries("validate-patient");

libs/wmhealth/shared/src/lib/appointments/future-appointment-card.tsx
37:    await queryCache.invalidateQueries("validate-patient");
```
