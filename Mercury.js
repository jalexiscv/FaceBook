if (self.CavalryLogger) {
    CavalryLogger.start_js(["yi8fn"]);
}

__d("MercuryCommands", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        ME: "\/me "
    };
}, null);
__d("MessagesViewerSetID", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        MESSAGES: "messages",
        MESSAGES_VIEW_ALL_IN_THREAD: "messages:view_all_in_thread"
    };
}, null);
__d("MNCommerceMessageType", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        TEXT: "text",
        IMAGE: "image",
        VIDEO: "video",
        AUDIO: "audio",
        FILE: "file",
        ROBOT_TEXT: "robot_text",
        LOCATION: "location",
        FORCED_FETCH_MESSAGE: "forced_fetch_message",
        RETAIL_PRODUCT_SUBSCRIPTION: "retail_product_subscription",
        RETAIL_PROMOTION: "retail_promotion",
        RETAIL_CANCELLATION: "retail_cancellation",
        RETAIL_SHIPMENT: "retail_shipment",
        SHIPMENT_TRACKING_EVENT: "shipment_tracking_event",
        AIRLINE_CHECKIN_REMINDER: "airline_checkin_reminder",
        AIRLINE_BOARDING_PASS: "airline_boarding_pass",
        AIRLINE_CHECKIN: "airline_checkin",
        AIRLINE_BOARDINGPASS: "airline_boardingpass",
        AIRLINE_UPDATE: "airline_update",
        AIRLINE_ITINERARY: "airline_itinerary",
        CONTENT_SUBSCRIPTION: "content_subscription",
        AD_ADMIN_TEXT: "ad_admin_text",
        AD_TEXT: "ad_text",
        AD_BUBBLE: "ad_bubble",
        NON_AD: "non_ad",
        UNKNOWN: "unknown",
        OTHER: "other",
        GENERIC: "generic",
        BUTTON: "button",
        RECEIPT: "receipt",
        GENERIC_LEGACY: "generic_legacy",
        RIDE_INTENT: "ride_intent",
        RIDE_SIGNUP: "ride_signup",
        RIDE_WELCOME: "ride_welcome",
        RIDE_ORDER_CONFIRMATION: "ride_order_confirmation",
        RIDE_REQUESTED: "ride_requested",
        RIDE_DRIVER_ON_THE_WAY: "ride_driver_on_the_way",
        RIDE_NO_DRIVER: "ride_no_driver",
        RIDE_DRIVER_ARRIVING: "ride_driver_arriving",
        RIDE_DRIVER_CANCELED: "ride_driver_canceled",
        RIDE_RIDER_CANCELED: "ride_rider_canceled",
        RIDE_COMPLETE: "ride_complete",
        RIDE_ADMIN_MESSAGE: "ride_admin_message",
        RIDE_RECEIPT: "ride_receipt",
        RIDE_REENGAGEMENT_FIRST_RIDE: "ride_reengagement_first_ride",
        GET_RIDE: "give_get_ride",
        GIVE_RIDE: "send_give_get_ride",
        REFERER_PROMO: "referer_promo",
        LINK: "link_admin_message",
        UNLINK: "unlink_admin_message",
        BLOCK_ALL: "block_all_admin_message",
        UNBLOCK_ALL: "unblock_all_admin_message",
        BLOCK_PROMOTION: "block_promotion_admin_message",
        UNBLOCK_PROMOTION: "unblock_promotion_admin_message",
        INITIAL_PROMOTION: "initial_promotion_admin_message",
        WEAK_CONSENT_ADMIN_MESSAGE: "weak_consent_admin_message"
    };
}, null);
__d("P2PPaymentLoggerEvent", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        ACTN_ADD_CREDIT_CARD: "Actn_AddCreditCard",
        ACTN_UPDATE_CREDIT_CARD: "Actn_UpdateCreditCard",
        ACTN_REMOVE_CREDIT_CARD: "Actn_RemoveCreditCard",
        ACTN_UNLOCK_CREDIT_CARD: "Actn_UnlockCreditCard",
        ACTN_VALIDATE_CARD: "Actn_ValidateCard",
        ACTN_TRANSFER_MONEY: "Actn_TransferMoney",
        ACTN_TRANSFER_MONEY_WITH_CAMPAIGN: "Actn_TransferMoneyWithCampaign",
        ACTN_TRANSFER_MONEY_WITH_CAMPAIGN_PARENT_CALL: "Actn_TransferMoneyWithCampaignParentCall",
        ACTN_TRANSFER_MONEY_WITH_CAMPAIGN_POST_SUCCESS: "Actn_TransferMoneyWithCampaignPostSuccess",
        ACTN_TRANSFER_MONEY_CHECK_NEEDS_REVERT: "Actn_TransferMoneyCheckNeedsRevert",
        ACTN_TRANSFER_MONEY_REVERT: "Actn_TransferMoneyRevert",
        ACTN_TRANSFER_MONEY_CREATE_CONTEXT: "Actn_TransferMoneyCreateContext",
        ACTN_TRANSFER_MONEY_CREATE_PLATFORM_ITEM: "Actn_TransferMoneyCreatePlatformItem",
        ACTN_ACCEPT_MONEY: "Actn_AcceptMoney",
        ACTN_DECLINE_MONEY: "Actn_DeclineMoney",
        ACTN_SET_PRIMARY: "Actn_SetPrimary",
        ACTN_WITHDRAW_MONEY: "Actn_WithdrawMoney",
        ACTN_CREATE_MSGR_COMMERCE_CART: "Actn_CreateMsgrCommerceCart",
        ACTN_PLACE_MSGR_COMMERCE_ORDER: "Actn_PlaceMsgrCommerceOrder",
        ACTN_PLATFORM_SET_SHIPPING_ADDRESS: "Actn_PlatformSetShippingAddress",
        ACTN_PLATFORM_BANNER_IMPRESSION: "Actn_PlatformBannerImpression",
        ACTN_PLATFORM_BANNER_DISMISSAL: "Actn_PlatformBannerDismissal",
        ACTN_PLATFORM_CARD_IMPRESSION: "Actn_PlatformCardImpression",
        ACTN_PLATFORM_CARD_DISMISSAL: "Actn_PlatformCardDismissal",
        ACTN_SEND_TRANSFER_MESSAGE: "Actn_SendTransferMessage",
        ACTN_POST_TRANSFER_STEPS: "Actn_PostTransferSteps",
        ACTN_SEND_EXPIRE_NOTIFICATIONS: "Actn_SendExpireNotifications",
        ACTN_SEND_PUSH_FAIL_NOTIFS: "Actn_SendPushFailNotis",
        ACTN_UNCATEGORIZED_EXCEPTION: "Actn_Uncategorized_Exception",
        ACTN_INCREASE_CAMPAIGN_COUNTER: "Actn_Increase_Campaign_Counter",
        ACTN_CREATE_PAYMENT_REQUEST: "Actn_CreatePaymentRequest",
        ACTN_REMIND_PAYMENT_REQUEST: "Actn_RemindPaymentRequest",
        ACTN_PAY_PAYMENT_REQUEST: "Actn_PayPaymentRequest",
        ACTN_DECLINE_PAYMENT_REQUEST: "Actn_DeclinePaymentRequest",
        ACTN_CANCEL_PAYMENT_REQUEST: "Actn_CancelPaymentRequest",
        ACTN_EXPIRE_PAYMENT_REQUEST: "Actn_ExpirePaymentRequest",
        ACTN_SEND_PAYMENT_REQUEST_MESSAGE: "Actn_SendPaymentRequestMessage",
        ACTN_AUTH_FOR_SENDER_REVIEW: "Actn_AuthForSenderReview",
        ACTN_COMPLETE_SENDER_REVIEW: "Actn_CompleteSenderReview",
        ACTN_COMPLETE_RECEIVER_REVIEW: "Actn_CompleteReceiverReview",
        ACTN_SUBMIT_VERIFICATION_STEP: "Actn_SubmitVerificationStep",
        ACTN_COMPLETE_SENDER_VERIFICATION: "Actn_CompleteSenderVerification",
        ACTN_COMPLETE_RECEIVER_VERIFICATION: "Actn_CancelReceiverVerification",
        ACTN_CANCEL_SENDER_VERIFICATION: "Actn_CancelSenderVerification",
        ACTN_CANCEL_RECEIVER_VERIFICATION: "Actn_CancelReceiverVerification",
        ACTN_CANCEL_SENDER_RISK: "Actn_CancelSenderRisk",
        ACTN_CANCEL_EXPIRE: "Actn_CancelExpire",
        ACTN_CANCEL_FOR_SAME_CARD: "Actn_CancelForSameCard",
        ACTN_CANCEL_BY_CUSTOMER_SERVICE: "Actn_CancelByCustomerService",
        ACTN_CANCEL_RECEIVER_REVIEW: "Actn_CancelReceiverReview",
        ACTN_CANCEL_SENDER_REVIEW: "Actn_CancelSenderReview",
        ACTN_CANCEL_ALL_PENDING_TRANSFERS: "Actn_CancelAllPendingTransfers",
        ACTN_FILTER_LOGMESSAGE: "Actn_FilterLogMessage",
        ACTN_FILTER_NOTIFICATION: "Actn_FilterNotification",
        ACTN_SEND_NOTIFICATION: "Actn_SendNotification",
        ACTN_ADD_PIN: "Actn_AddPIN",
        ACTN_UPDATE_PIN: "Actn_UpdatePIN",
        ACTN_REMOVE_PIN: "Actn_RemovePIN",
        ACTN_RESET_PIN: "Actn_ResetPIN",
        ACTN_VALIDATE_PIN: "Actn_ValidatePIN",
        ACTN_UPDATE_PASSWORD_SETTINGS: "Actn_UpdatePasswordSettings",
        ACTN_ENABLE_TOUCH_ID: "Actn_EnableTouchID",
        ACTN_VERIFY_TOUCH_ID: "Actn_VerifyTouchID",
        ACTN_DISABLE_TOUCH_ID: "Actn_DisableTouchID",
        ACTN_CHANNEL_NOTIF_CARD_EVENT: "Actn_ChannelNotifCardEvent",
        ACTN_CHANNEL_NOTIF_TRANSFER_STATUS_EVENT: "Actn_ChannelNotifTransferStatusEvent",
        ACTN_CHANNEL_NOTIF_PLATFORM_EVENT: "Actn_ChannelNotifPlatformEvent",
        ACTN_CHANNEL_NOTIF_PAYMENT_REQUEST_STATUS_EVENT: "Actn_ChannelNotifPaymentRequestStatusEvent",
        ACTN_PLATFORM_BANNER_DISMISSED: "Actn_PlatformBannerDismissed",
        ACTN_PLATFORM_BANNER_MARK_AS_SOLD: "Actn_PlatformBannerMarkAsSold",
        ACTN_ADD_ADDRESS: "Actn_AddAddress",
        ACTN_GET_ADDRESSES: "Actn_GetAddresses",
        ACTN_GET_CURRENT_USER_PROFILE_DATA: "Actn_GetCurrentUserProfileData",
        ACTN_CAMPAIGN_CHECK_USER_HAS_NEW_ACTIVITY: "Actn_CampaignCheckUserHasNewActivity",
        ACTN_CAMPAIGN_SAVE_PROMO_NOTIFICATION_TIME: "Actn_CampaignSavePromoNotificationTime",
        UI_ACTN_SEND_MONEY_BUTTON_CLICKED: "UI_Actn_Send_Money_Button_Clicked",
        UI_ACTN_SEND_MONEY_BUTTON_PLACEHOLDER_CLICKED: "UI_Actn_Send_Money_Button_Placeholder_Clicked",
        UI_ACTN_INITIATE_SEND: "UI_Actn_Initiate_Send",
        UI_ACTN_P2P_SENDER_DISABLED_SHOWN: "UI_Actn_P2P_Sender_Disabled_Shown",
        UI_ACTN_P2P_RECIPIENT_INELIGIBLE_SHOWN: "UI_Actn_P2P_Recipient_Ineligible_Shown",
        UI_ACTN_CANCEL_SEND: "UI_Actn_Send_Money_Cancelled",
        UI_ACTN_INITIATE_ADD_CARD: "UI_Actn_Initiate_Add_Card",
        UI_ACTN_INITIATE_CHOOSE_CARD: "UI_Actn_Initiate_Choose_Card",
        UI_ACTN_CANCEL_ADD_CARD: "UI_Actn_Cancel_Add_Card",
        UI_ACTN_CONFIRM_CARD_DETAILS: "UI_Actn_Confirm_Card_Details",
        UI_ACTN_ACCEPT_MONEY_CANCEL: "UI_Actn_Accept_Money_Cancel",
        UI_ACTN_ACCEPT_WITH_CARD: "UI_Actn_Accept_With_Card",
        UI_ACTN_ADD_CARD_SUCCESS: "UI_Actn_Add_Card_Success",
        UI_ACTN_ADD_CARD_FAIL: "UI_Actn_Add_Card_Fail",
        UI_ACTN_CONFIRM_SEND: "UI_Actn_Confirm_Send",
        UI_ACTN_SEND_SUCCESS: "UI_Actn_Send_Success",
        UI_ACTN_SEND_MONEY_CANCELLED: "UI_Actn_Send_Money_Cancelled",
        UI_ACTN_SEND_FAIL: "UI_Actn_Send_Fail",
        UI_ACTN_INITIATE_EDIT_CARD: "UI_Actn_Initiate_Edit_Card",
        UI_ACTN_CANCEL_EDIT_CARD: "UI_Actn_Cancel_Edit_Card",
        UI_ACTN_CONFIRM_EDIT_CARD_DETAILS: "UI_Actn_Confirm_Edit_Card_Details",
        UI_ACTN_EDIT_CARD_SUCCESS: "UI_Actn_Edit_Card_Success",
        UI_ACTN_EDIT_CARD_FAIL: "UI_Actn_Edit_Card_Fail",
        UI_ACTN_INITIATE_REMOVE_CARD: "UI_Actn_Initiate_Remove_Card",
        UI_ACTN_CONFIRM_REMOVE_CARD: "UI_Actn_Confirm_Remove_Card",
        UI_ACTN_REMOVE_CARD_SUCCESS: "UI_Actn_Remove_Card_Success",
        UI_ACTN_REMOVE_CARD_FAIL: "UI_Actn_Remove_Card_Fail",
        UI_ACTN_INITIATE_PASSWORD_PROTECTION_NUX: "UI_Actn_Initiate_Password_Protection_NUX",
        UI_ACTN_OPT_IN_PASSWORD_PROTECTION_NUX: "UI_Actn_Opt_In_Password_Protection_NUX",
        UI_ACTN_OPT_OUT_PASSWORD_PROTECTION_NUX: "UI_Actn_Opt_Out_Password_Protection_NUX",
        UI_ACTN_ENABLED_PASSWORD_PROTECTION_SETTING: "UI_Actn_Enabled_Password_Protection_Setting",
        UI_ACTN_DISABLED_PASSWORD_PROTECTION_SETTING: "UI_Actn_Disabled_Password_Protection_Setting",
        UI_ACTN_SEND_CLICKED: "UI_Actn_Send_Clicked",
        UI_ACTN_VERIFY_CSC: "UI_Actn_Verify_CSC",
        UI_ACTN_CONFIRM_AMOUNT: "UI_Actn_Confirm_Amount",
        UI_ACTN_EDIT_CARD: "UI_Actn_Edit_Card",
        UI_ACTN_CHANGE_CARD: "UI_Actn_Change_Card",
        UI_ACTN_INITIATE_SEND_TRIGGER: "UI_Actn_Initiate_Send_Trigger",
        UI_ACTN_INITIATE_GROUP_SEND: "UI_Actn_Initiate_Group_Send",
        UI_ACTN_GROUP_SEND_CANCELLED: "UI_Actn_Group_Send_Cancelled",
        UI_ACTN_INITIATE_GROUP_SEND_TRIGGER: "UI_Actn_Initiate_Group_Send_Trigger",
        UI_ACTN_GROUP_SEND_RECIPIENT_PICKED: "UI_Actn_Group_Send_Recipient_Picked",
        UI_ACTN_3RD_PARTY_RECEIPT_SHOWN: "UI_Actn_3rd_Party_Receipt_Shown",
        UI_ACTN_3RD_PARTY_RECEIPT_DISMISSED: "UI_Actn_3rd_Party_Receipt_Dismissed",
        UI_ACTN_3RD_PARTY_NON_ENABLED_LOG_MESSAGE_CLICKED: "UI_Actn_3rd_Party_Non_Enabled_Log_Message_Clicked",
        UI_ACTN_3RD_PARTY_NON_ENABLED_LOG_MESSAGE_CANCELLED: "UI_Actn_3rd_Party_Non_Enabled_Log_Message_Cancelled",
        UI_ACTN_CHAT_THREAD_BANNER_CLICKED: "UI_Actn_Chat_Thread_Banner_Clicked",
        UI_ACTN_CHAT_THREAD_BANNER_VIEWED: "UI_Actn_Chat_Thread_Banner_Viewed",
        UI_ACTN_CHAT_THREAD_BANNER_DISMISSED: "UI_Actn_Chat_Thread_Banner_Dismissed",
        UI_ACTN_INITIATE_MONEYPENNY_ORDER: "UI_Actn_Initiate_Moneypenny_Order",
        UI_ACTN_CONFIRM_MONEYPENNY_ORDER: "UI_Actn_Confirm_Moneypenny_Order",
        UI_ACTN_MONEYPENNY_ORDER_FAIL: "UI_Actn_Moneypenny_Order_Fail",
        UI_ACTN_MONEYPENNY_ORDER_SUCCESS: "UI_Actn_Moneypenny_Order_Success",
        UI_ACTN_MONEYPENNY_ORDER_CANCEL: "UI_Actn_Moneypenny_Order_Cancel",
        UI_ACTN_FRIEND_PICKER_SEARCH: "UI_Actn_Friend_Picker_Search",
        UI_ACTN_FRIEND_PICKER_SELECT: "UI_Actn_Friend_Picker_Select",
        UI_ACTN_FRIEND_PICKER_SHOWN: "UI_Actn_Friend_Picker_Shown",
        UI_ACTN_FI_CANCEL: "UI_Actn_FI_Cancel",
        UI_ACTN_FI_SUCCESS_DIALOG_NEXT: "UI_Action_Success_Dialog_Next",
        UI_ACTN_FI_BANNER_DISMISSED: "UI_Actn_FI_Banner_Dismissed",
        UI_ACTN_FI_BANNER_IMPRESSION: "UI_Actn_FI_Banner_Impression",
        UI_ACTN_INCENTIVE_TRANSFER_SUCCESS: "UI_Actn_Incentive_Transfer_Success",
        UI_ACTN_INCENTIVE_TRANSFER_FAILURE: "UI_Actn_Incentive_Transfer_Failure",
        UI_ACTN_PLATFORM_BANNER_SELLER_HIDE_CLICKED: "UI_Actn_Platform_Banner_Seller_Hide_Clicked",
        UI_ACTN_PLATFORM_BANNER_BUYER_HIDE_CLICKED: "UI_Actn_Platform_Banner_Buyer_Hide_Clicked",
        UI_ACTN_PLATFORM_BANNER_SOLD_CLICKED: "UI_Actn_Platform_Banner_Sold_Clicked",
        UI_ACTN_PLATFORM_BANNER_IMAGE_CLICKED: "UI_Actn_Platform_Banner_Image_Clicked",
        UI_ACTN_PLATFORM_BANNER_TITLE_CLICKED: "UI_Actn_Platform_Banner_Title_Clicked",
        UI_ACTN_PLATFORM_BANNER_PAY_CLICKED: "UI_Actn_Platform_Banner_Pay_Clicked",
        UI_ACTN_PLATFORM_BANNER_REQUEST_CLICKED: "UI_Actn_Platform_Banner_Request_Clicked",
        UI_ACTN_PLATFORM_BANNER_SELLER_VIEWED: "UI_Actn_Platform_Banner_Seller_Viewed",
        UI_ACTN_PLATFORM_BANNER_BUYER_VIEWED: "UI_Actn_Platform_Banner_Buyer_Viewed",
        UI_ACTN_PLATFORM_BANNER_PAY_NUX_SHOWN: "UI_Actn_Platform_Banner_Pay_Nux_Shown",
        UI_ACTN_INITIATE_REQUEST: "UI_Actn_Initiate_Request",
        UI_ACTN_REQUEST_CLICKED: "UI_Actn_Request_Clicked",
        UI_ACTN_CONFIRM_REQUEST: "UI_Actn_Confirm_Request",
        UI_ACTN_REQUEST_SUCCESS: "UI_Actn_Request_Success",
        UI_ACTN_REQUEST_FAIL: "UI_Actn_Request_Fail",
        UI_ACTN_INITIATE_DECLINE_REQUEST: "UI_Actn_Initiate_Decline_Request",
        UI_ACTN_CONFIRM_DECLINE_REQUEST: "UI_Actn_Confirm_Decline_Request",
        UI_ACTN_DECLINE_REQUEST_FAIL: "UI_Actn_Decline_Request_Fail",
        UI_ACTN_DECLINE_REQUEST_SUCCESS: "UI_Actn_Decline_Request_Success",
        UI_ACTN_INITIATE_CANCEL_REQUEST: "UI_Actn_Initiate_Cancel_Request",
        UI_ACTN_CONFIRM_CANCEL_REQUEST: "UI_Actn_Confirm_Cancel_Request",
        UI_ACTN_CANCEL_REQUEST_FAIL: "UI_Actn_Cancel_Request_Fail",
        UI_ACTN_CANCEL_REQUEST_SUCCESS: "UI_Actn_Cancel_Request_Success",
        UI_ACTN_INITIATE_CHECKOUT: "UI_Actn_Initiate_Checkout",
        UI_ACTN_CHECKOUT_CONFIRM: "UI_Actn_Checkout_Confirm",
        UI_ACTN_INITIATE_ADD_ADDRESS: "UI_Actn_Initiate_Add_Address",
        UI_ACTN_CANCEL_ADD_ADDRESS: "UI_Actn_Cancel_Add_Address",
        UI_ACTN_INITIATE_CHOOSE_ADDRESS: "UI_Actn_Initiate_Choose_Address",
        UI_ACTN_CONFIRM_ADDRESS_DETAILS: "UI_Actn_Confirm_Address_Details",
        UI_ACTN_ADD_ADDRESS_SUCCESS: "UI_Actn_Add_Address_Success",
        UI_ACTN_ADD_ADDRESS_FAIL: "UI_Actn_Add_Address_Fail",
        UI_ACTN_CHECKOUT_FAIL: "UI_Actn_Checkout_Fail",
        UI_ACTN_CHECKOUT_CART_CREATION_FAIL: "UI_Actn_Checkout_Cart_Creation_Fail",
        UI_ACTN_CHECKOUT_CANCEL: "UI_Actn_Checkout_Cancel",
        UI_ACTN_CHECKOUT_SUCCESS: "UI_Actn_Checkout_Success",
        UI_ACTN_CHECKOUT_CART_CREATION_SUCCESS: "UI_Actn_Checkout_Cart_Creation_Success",
        UI_ACTN_SEND_MONEY_PAGE_VIEWED: "UI_Actn_Send_Money_Page_Viewed",
        UI_ACTN_ACCEPT_MONEY_NUX_SHOWN: "UI_Actn_Accept_Money_NUX_Shown",
        UI_ACTN_ACCEPT_MONEY_NUX_NEXT_CLICK: "UI_Actn_Accept_Money_NUX_Next_Click",
        UI_ACTN_SEND_MONEY_NUX_SHOWN: "UI_Actn_Send_Money_NUX_Shown",
        UI_ACTN_SEND_MONEY_NUX_NEXT_CLICK: "UI_Actn_Send_Money_NUX_Next_Click",
        UI_ACTN_GET_CREDIT_CARDS_EXCEPTION: "UI_ACTN_GET_CREDIT_CARDS_EXCEPTION",
        UI_ACTN_CREATE_TRANSFER_EXCEPTION: "UI_ACTN_CREATE_TRANSFER_EXCEPTION",
        UI_ACTN_ADD_CARD_EXCEPTION: "UI_ACTN_ADD_CARD_EXCEPTION",
        UI_ACTN_GET_TRANSFERS_EXCEPTION: "UI_ACTN_GET_TRANSFERS_EXCEPTION",
        UI_ACTN_GET_EXTENSIVE_TRANSFERS_EXCEPTION: "UI_ACTN_GET_EXTENSIVE_TRANSFERS_EXCEPTION",
        UI_ACTN_GET_NUX_TRANSFERS_EXCEPTION: "UI_ACTN_GET_NUX_TRANSFERS_EXCEPTION",
        UI_ACTN_UPDATE_PRESET_CARD_EXCEPTION: "UI_ACTN_UPDATE_PRESET_CARD_EXCEPTION",
        UI_ACTN_UPDATE_CARD_EXCEPTION: "UI_ACTN_UPDATE_CARD_EXCEPTION",
        UI_ACTN_DELETE_CARD_EXCEPTION: "UI_ACTN_DELETE_CARD_EXCEPTION",
        UI_ACTN_GET_PASSWORD_PROTECTION_EXCEPTION: "UI_ACTN_GET_PASSWORD_PROTECTION_EXCEPTION",
        UI_ACTN_SET_PASSWORD_PROTECTION_EXCEPTION: "UI_ACTN_SET_PASSWORD_PROTECTION_EXCEPTION",
        UI_ACTN_DECLINE_TRANSFER_EXCEPTION: "UI_ACTN_DECLINE_TRANSFER_EXCEPTION",
        UI_ACTN_CANCEL_TRANSFER_EXCEPTION: "UI_ACTN_CANCEL_TRANSFER_EXCEPTION",
        UI_ACTN_VERIFY_CARD_EXCEPTION: "UI_ACTN_VERIFY_CARD_EXCEPTION",
        UI_ACTN_VALIDATE_BIN_EXCEPTION: "UI_ACTN_VALIDATE_BIN_EXCEPTION",
        UI_ACTN_GET_ELIGIBILITY_EXCEPTION: "UI_ACTN_GET_ELIGIBILITY_EXCEPTION",
        UI_ACTN_GET_FRIEND_LIST_EXCEPTION: "UI_ACTN_GET_FRIEND_LIST_EXCEPTION",
        UI_ACTN_GET_BANNER_STATES_EXCEPTION: "UI_ACTN_GET_BANNER_STATES_EXCEPTION",
        UI_ACTN_INCREMENT_BANNER_VIEW_EXCEPTION: "UI_ACTN_INCREMENT_BANNER_VIEW_EXCEPTION",
        UI_ACTN_INCREMENT_BANNER_DISMISSAL_EXCEPTION: "UI_ACTN_INCREMENT_BANNER_DISMISSAL_EXCEPTION",
        UI_ACTN_CREATE_M_TRANSFER_EXCEPTION: "UI_ACTN_CREATE_M_TRANSFER_EXCEPTION",
        UI_ACTN_CREATE_FI_TRANSER_EXCEPTION: "UI_ACTN_CREATE_FI_TRANSER_EXCEPTION",
        UI_ACTN_GET_PLATFORM_CONTEXT_EXCEPTION: "UI_ACTN_GET_PLATFORM_CONTEXT_EXCEPTION",
        UI_ACTN_DISMISS_PLATFORM_CONTEXT_EXCEPTION: "UI_ACTN_DISMISS_PLATFORM_CONTEXT_EXCEPTION",
        UI_ACTN_MARK_SOLD_CONTEXT_EXCEPTION: "UI_ACTN_MARK_SOLD_CONTEXT_EXCEPTION",
        UI_ACTN_GET_ADDRESSES_EXCEPTION: "UI_ACTN_GET_ADDRESSES_EXCEPTION",
        UI_ACTN_ADD_ADDRESS_EXCEPTION: "UI_ACTN_ADD_ADDRESS_EXCEPTION",
        UI_ACTN_CREATE_CART_EXCEPTION: "UI_ACTN_CREATE_CART_EXCEPTION",
        UI_ACTN_SET_CART_ADDRESS_EXCEPTION: "UI_ACTN_SET_CART_ADDRESS_EXCEPTION",
        UI_ACTN_GET_PROFILE_EXCEPTION: "UI_ACTN_GET_PROFILE_EXCEPTION",
        UI_ACTN_CREATE_REQUEST_EXCEPTION: "UI_ACTN_CREATE_REQUEST_EXCEPTION",
        UI_ACTN_DECLINE_REQUEST_EXCEPTION: "UI_ACTN_DECLINE_REQUEST_EXCEPTION",
        UI_ACTN_CANCEL_REQUEST_EXCEPTION: "UI_ACTN_CANCEL_REQUEST_EXCEPTION",
        UI_ACTN_GET_PENDING_REQUESTS_EXCEPTION: "UI_ACTN_GET_PENDING_REQUESTS_EXCEPTION",
        UI_ACTN_GROUP_SELL_INTEREST_QP_DIALOG_SHOWN: "UI_ACTN_GROUP_SELL_INTEREST_QP_DIALOG_SHOWN",
        UI_ACTN_GROUP_SELL_INTEREST_QP_DIALOG_NEXT_CLICK: "UI_ACTN_GROUP_SELL_INTEREST_QP_DIALOG_NEXT_CLICK",
        UI_ACTN_GROUP_SELL_INTEREST_MESSAGE_SELLER_CLICK: "UI_ACTN_GROUP_SELL_INTEREST_MESSAGE_SELLER_CLICK",
        UI_ACTN_GROUP_SELL_INTEREST_MESSAGE_SEND_CLICK: "UI_ACTN_GROUP_SELL_INTEREST_MESSAGE_SEND_CLICK",
        UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_SHOWN: "UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_SHOWN",
        UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_CANCEL_CLICK: "UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_CANCEL_CLICK",
        UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_PAY_CLICK: "UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_PAY_CLICK",
        UI_ACTN_PAYMENTS_HISTORY_BLUEBAR_CLICK: "UI_ACTN_PAYMENTS_HISTORY_BLUEBAR_CLICK"
    };
}, null);
__d("P2PPaymentLoggerEventFlow", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        UI_FLOW_P2P_SEND: "UI_Flow_P2P_Send",
        UI_FLOW_P2P_REQUEST: "UI_Flow_P2P_Request",
        UI_FLOW_P2P_RECEIVE: "UI_Flow_P2P_Receive",
        UI_FLOW_P2P_SETTINGS: "UI_Flow_P2P_Settings",
        UI_FLOW_P2P_GROUP_SEND: "UI_Flow_P2P_Group_Send",
        UI_FLOW_P2P_GROUP_REQUEST: "UI_Flow_P2P_Group_Request",
        UI_FLOW_MONEYPENNY_CHECKOUT: "UI_Flow_Moneypenny_Checkout",
        UI_FLOW_FINANCIAL_INCENTIVES: "UI_Flow_Financial_Incentives",
        UI_FLOW_FINANCIAL_INCENTIVES_ZERO_INDEX_JEWEL: "UI_Flow_Financial_Incentives_Zero_Index_Jewel",
        UI_FLOW_PLATFORM_BANNER: "UI_Flow_Platform_Banner",
        UI_FLOW_CHECKOUT: "UI_Flow_Checkout",
        UI_FLOW_SEND_MONEY_PAGE: "UI_Flow_Send_Money_Page",
        UI_FLOW_REQUEST_SENDER_NUX_CHAT_THREAD_BANNER: "UI_Flow_Request_Sender_NUX_Chat_Thread_Banner",
        UI_FLOW_SENDER_NUX_CHAT_THREAD_BANNER: "UI_Flow_Sender_NUX_Chat_Thread_Banner",
        UI_FLOW_GROUP_SELL_INTEREST_DIALOG: "UI_FLOW_GROUP_SELL_INTEREST_DIALOG",
        UI_FLOW_SEND_MONEY_BLUEBAR: "UI_FLOW_SEND_MONEY_BLUEBAR",
        UI_FLOW_PAYMENTS_MENU_BLUEBAR: "UI_FLOW_PAYMENTS_MENU_BLUEBAR",
        UI_FLOW_BOOKMARK: "UI_FLOW_BOOKMARK"
    };
}, null);
__d("P2PPaymentRequestStatus", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        INITED: 1,
        DECLINED: 2,
        TRANSFER_INITED: 3,
        TRANSFER_COMPLETED: 4,
        TRANSFER_FAILED: 5,
        CANCELED: 6,
        EXPIRED: 7
    };
}, null);
__d("StickerAssetType", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        IMAGE: "BestEffortImage",
        SPRITE: "SpriteImage",
        PADDED_SPRITE: "PaddedSpriteImage"
    };
}, null);
__d('TypingDetector', ['ArbiterMixin', 'Event', 'Input', 'Run', 'SubscriptionsHandler', 'TypingStates', 'createObjectFrom', 'emptyFunction'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(i, j) {
        this._input = i;
        this._ignoreKeys = {};
        this._getValueFn = j;
    }
    Object.assign(h.prototype, c('ArbiterMixin'), {
        _timeout: 7000,
        _currentState: c('TypingStates').INACTIVE,
        init: function() {
            this.init = c('emptyFunction');
            this.reset();
            this._subscriptions = new(c('SubscriptionsHandler'))();
            this._subscriptions.addSubscriptions(c('Event').listen(this._input, 'keyup', this._update.bind(this)), c('Run').onUnload(this._onunload.bind(this)));
        },
        reset: function() {
            clearTimeout(this._checkTimer);
            this._checkTimer = null;
            this._lastKeystrokeAt = null;
            this._currentState = c('TypingStates').INACTIVE;
        },
        setIgnoreKeys: function(i) {
            this._ignoreKeys = c('createObjectFrom')(i);
        },
        destroy: function() {
            this._subscriptions.release();
        },
        _onunload: function() {
            if (this._currentState == c('TypingStates').TYPING) this._transition(c('TypingStates').QUITTING);
        },
        _update: function(event) {
            var i = c('Event').getKeyCode(event),
                j = this._currentState;
            if (!this._ignoreKeys[i]) {
                var k = this._getValueFn ? this._getValueFn() : c('Input').getValue(this._input);
                if (k.trim().length === 0) {
                    if (j == c('TypingStates').TYPING) this._transition(c('TypingStates').INACTIVE);
                } else if (j == c('TypingStates').TYPING) {
                    this._recordKeystroke();
                } else if (j == c('TypingStates').INACTIVE) {
                    this._transition(c('TypingStates').TYPING);
                    this._recordKeystroke();
                }
            }
        },
        _transition: function(i) {
            this.reset();
            this._currentState = i;
            this.inform('change', i);
        },
        _recordKeystroke: function() {
            this._lastKeystrokeTime = Date.now();
            if (!this._checkTimer) this._checkTimer = setTimeout(this._checkTyping.bind(this), this._timeout);
        },
        _checkTyping: function() {
            var i = this._lastKeystrokeTime + this._timeout,
                j = Date.now();
            if (j > i) {
                this._transition(c('TypingStates').INACTIVE);
            } else {
                clearTimeout(this._checkTimer);
                this._checkTimer = setTimeout(this._checkTyping.bind(this), i - j + 10);
            }
        }
    });
    f.exports = h;
}, null);
__d('TypingDetectorController', ['AsyncRequest', 'AvailableList', 'AvailableListConstants', 'ChatVisibility', 'Keys', 'MercuryServerRequestsConfig', 'TypingDetector', 'TypingStates', 'emptyFunction', 'ifRequired', 'setTimeoutAcrossTransitions', 'shield'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h(i, j, k, l, m, n) {
        this.userID = i;
        this.input = j;
        this.source = k;
        this.threadID = m;
        this.remoteState = c('TypingStates').INACTIVE;
        this.notifyTimer = null;
        l = l || {};
        this.notifyDelay = l.notifyDelay || this.notifyDelay;
        this._typingDetector = new(c('TypingDetector'))(j, n);
        this._typingDetector.init(l);
        this._typingDetector.subscribe('change', this._stateChange.bind(this));
    }
    h.prototype.setUserAndThread = function(i, j) {
        if (this.userID !== i || this.threadID !== j) {
            this.resetState();
            this.userID = i;
            this.threadID = j;
        }
    };
    h.prototype.setIgnoreEnter = function(i) {
        var j = i ? [c('Keys').RETURN] : [];
        this._typingDetector.setIgnoreKeys(j);
    };
    h.prototype.resetState = function() {
        this._notifyState(c('TypingStates').INACTIVE);
        this.remoteState = c('TypingStates').INACTIVE;
        this._typingDetector.reset();
        clearTimeout(this.notifyTimer);
        this.notifyTimer = null;
    };
    h.prototype.destroy = function() {
        this.resetState();
        this._typingDetector.destroy();
    };
    h.prototype._stateChange = function(i, j) {
        if (j != c('TypingStates').QUITTING) {
            clearTimeout(this.notifyTimer);
            this.notifyTimer = c('setTimeoutAcrossTransitions')(c('shield')(this._notifyState, this, j), this.notifyDelay);
        } else this._notifyState(j, true);
    };
    h.prototype._notifyState = function(i, j) {
        if (!this.userID && !this.threadID || !c('ChatVisibility').isOnline() || i === this.remoteState || c('ifRequired')('ChannelConnection', function(k) {
                return k.disconnected();
            }, function() {
                return true;
            })) return;
        this._sendRequest(i, this.userID, j);
    };
    h.prototype._sendRequest = function(i, j, k) {
        this.remoteState = i;
        var l = {
                typ: i,
                to: j,
                source: this.source,
                thread: this.threadID
            },
            m = new(c('AsyncRequest'))().setHandler(this._onTypResponse.bind(this, j)).setErrorHandler(c('emptyFunction')).setData(l).setURI('/ajax/messaging/typ.php').setAllowCrossPageTransition(true).setOption('asynchronous_DEPRECATED', !k);
        if (c('MercuryServerRequestsConfig').msgrRegion) m.setRequestHeader('X-MSGR-Region', c('MercuryServerRequestsConfig').msgrRegion);
        m.send();
    };
    h.prototype._onTypResponse = function(i, j) {
        var k = j.getPayload() || {};
        if (k.offline) c('AvailableList').set(i, c('AvailableListConstants').OFFLINE, 'typing_response');
    };
    Object.assign(h.prototype, {
        notifyDelay: 1000
    });
    f.exports = h;
}, null);
__d('MercuryMessageDeliveryState', [], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        SENDING: 1,
        SENT: 2,
        DELIVERED: 3,
        ERROR: 0,
        UNKNOWN: -1
    };
    f.exports = h;
}, null);
__d('MercuryMessageInfo', ['MercuryActionStatus', 'MercuryMessageDeliveryState', 'MercuryViewer'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        isOutbound: function(i) {
            return i.author === c('MercuryViewer').getID();
        },
        isInbound: function(i) {
            return !h.isOutbound(i);
        },
        isSending: function(i) {
            return (i.status === c('MercuryActionStatus').UNSENT || i.status === c('MercuryActionStatus').UNCONFIRMED || i.status === c('MercuryActionStatus').UNABLE_TO_CONFIRM || i.status === c('MercuryActionStatus').RESENDING);
        },
        isSent: function(i) {
            return (i.status === undefined || i.status === c('MercuryActionStatus').SUCCESS);
        },
        hasError: function(i) {
            return (i.status === c('MercuryActionStatus').FAILED_UNKNOWN_REASON || i.status === c('MercuryActionStatus').UNABLE_TO_CONFIRM || i.status === c('MercuryActionStatus').ERROR);
        },
        getDeliveryState: function(i, j) {
            if (this.hasError(i)) return c('MercuryMessageDeliveryState').ERROR;
            if (this.isSending(i)) return c('MercuryMessageDeliveryState').SENDING;
            if (this.isSent(i)) {
                if (i.timestamp <= j) return c('MercuryMessageDeliveryState').DELIVERED;
                return c('MercuryMessageDeliveryState').SENT;
            }
            return c('MercuryMessageDeliveryState').UNKNOWN;
        }
    };
    f.exports = h;
}, null);
__d('MercuryErrorInfo', ['fbt', 'MercuryErrorType', 'MercuryMessageInfo'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = {
        getMessage: function(j) {
            var k = '';
            if (i.isConnectionError(j)) {
                k = h._("This message didn't send.");
                if (i.isTransient(j)) k = h._("{message} Check your internet connection and click to try again.", [h.param('message', k)]);
            } else {
                if (j && j.description) {
                    k = j.description;
                } else k = h._("This message failed to send.");
                if (i.isTransient(j)) k = h._("{message} Click to send again.", [h.param('message', k)]);
            }
            return k;
        },
        isConnectionError: function(j) {
            if (j && j.type == c('MercuryErrorType').TRANSPORT) return j.code === 1001 || j.code === 1004 || j.code === 1006;
            return false;
        },
        isTransient: function(j) {
            return j && j.is_transient;
        },
        isPermanent: function(j) {
            return j ? !this.isTransient(j) : false;
        },
        hasErrorStatus: function(j) {
            return c('MercuryMessageInfo').hasError(j);
        }
    };
    f.exports = i;
}, null);
__d('MercuryMessageError.react', ['cx', 'CurrentUser', 'ImmutableObject', 'Link.react', 'MercuryErrorInfo', 'MercuryMessageActions', 'React', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'MercuryMessageError',
            propTypes: {
                authorFBID: i.string,
                message: i.instanceOf(c('ImmutableObject')).isRequired
            },
            getDefaultProps: function() {
                return {
                    authorFBID: c('CurrentUser').getID()
                };
            },
            render: function() {
                var k = this.props.message,
                    l = k.error_data;
                return (c('React').createElement(c('Link.react'), babelHelpers['extends']({}, this.props, {
                    href: '#',
                    className: c('joinClasses')(this.props.className, this._getClassNameFromStatus(k)),
                    tabIndex: c('MercuryErrorInfo').isTransient(l) ? 0 : null,
                    onClick: this.messageResend
                }), c('React').createElement('i', {
                    className: "_2fs1"
                }), c('React').createElement('span', {
                    dangerouslySetInnerHTML: {
                        __html: this._getTextFromStatus(k)
                    }
                })));
            },
            messageResend: function(k) {
                k.preventDefault();
                var l = this.props.message,
                    m = l.error_data;
                if (c('MercuryErrorInfo').isTransient(m)) c('MercuryMessageActions').getForFBID(this.props.authorFBID).resend(this.props.message);
            },
            _getClassNameFromStatus: function(k) {
                if (c('MercuryErrorInfo').hasErrorStatus(k)) {
                    return "_2fs2" + (' ' + "_2fs3") + (c('MercuryErrorInfo').isTransient(k.error_data) ? ' ' + "_2fs4" : '') + (c('MercuryErrorInfo').isPermanent(k.error_data) ? ' ' + "_2fs5" : '');
                } else return "_2fs6 _2fs2";
            },
            _getTextFromStatus: function(k) {
                var l = '',
                    m = k.error_data;
                if (c('MercuryErrorInfo').hasErrorStatus(k)) l = c('MercuryErrorInfo').getMessage(m);
                if (typeof l === 'object' && l.__html) l = l.__html;
                return l;
            }
        });
    f.exports = j;
}, null);
__d('EmployeeLinkMatcher', ['CurrentUser'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = new RegExp('^[\\s.,:]'),
        i = new RegExp('(?:\\b)([BDTP]\\d{4,})(?:\\b)', 'im'),
        j = function(m) {
            if (!c('CurrentUser').isEmployee()) return null;
            var n = i.exec(m);
            if (n == null) return null;
            return {
                lnk: n[1],
                idx: n.index + (h.exec(n[0]) ? 1 : 0)
            };
        },
        k = function(m) {
            var n = c('CurrentUser').isEmployee() && i.exec(m) != null;
            return n;
        },
        l = {
            match: j,
            isMatch: k
        };
    f.exports = l;
}, null);
__d('PhotoStoreCore', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        actions: {
            UPDATE: 'update'
        },
        _photoCache: {},
        _postCreateCallbacks: {},
        getPhotoCache: function(i) {
            if (!this._photoCache[i]) throw new Error('Photo cache requested for unknown set ID');
            return this._photoCache[i];
        },
        hasBeenCreated: function(i) {
            return !!this._photoCache[i];
        },
        clearSetCache: function(i) {
            delete this._photoCache[i];
            delete this._postCreateCallbacks[i];
        },
        getByIndex: function(i, j, k) {
            this.getPhotoCache(i).getItemAtIndex(j, k);
        },
        getByIndexImmediate: function(i, j) {
            if (this._photoCache[i]) return this._photoCache[i].getItemAtIndexImmediate(j);
            return undefined;
        },
        getItemsInAvailableRange: function(i) {
            var j = this.getAvailableRange(i),
                k = [];
            for (var l = j.offset; l < j.length; l++) k.push(this.getByIndexImmediate(i, l));
            return k;
        },
        getItemsAfterIndex: function(i, j, k, l) {
            var m = this.getCursorByIndexImmediate(i, j);
            this.fetchForward(i, m, k, l);
        },
        getAllByIDImmediate: function(i) {
            var j = Object.keys(this._photoCache);
            return j.map(function(k) {
                return this.getByIndexImmediate(k, this.getIndexForID(k, i));
            }.bind(this)).filter(function(k) {
                return !!k;
            });
        },
        getIndexForID: function(i, j) {
            if (this._photoCache[i]) return this._photoCache[i].getIndexForID(j);
            return undefined;
        },
        getEndIndex: function(i) {
            var j = this.getAvailableRange(i);
            return j.offset + j.length - 1;
        },
        getCursorByIndexImmediate: function(i, j) {
            var k = this.getByIndexImmediate(i, j);
            if (k) return this._photoCache[i].getCursorForID(k.id);
            return undefined;
        },
        hasNextPage: function(i) {
            var j = this.getCursorByIndexImmediate(i, this.getEndIndex(i));
            return this.getPhotoCache(i).hasNextPage(j);
        },
        getAvailableRange: function(i) {
            return this.getPhotoCache(i).getAvailableRange();
        },
        hasLooped: function(i) {
            return this.getPhotoCache(i).hasLooped();
        },
        fetchForward: function(i, j, k, l) {
            this.getPhotoCache(i).getItemsAfterCursor(j, k, l);
        },
        fetchBackward: function(i, j, k, l) {
            this.getPhotoCache(i).getItemsBeforeCursor(j, k, l);
        },
        executePostCreate: function(i, j) {
            if (this._photoCache[i]) {
                j && j();
            } else this._postCreateCallbacks[i] = j;
        },
        runPostCreateCallback: function(i) {
            var j = this._postCreateCallbacks[i];
            if (j) {
                j();
                delete this._postCreateCallbacks[i];
            }
        },
        setPreFetchCallback: function(i, j) {
            this.getPhotoCache(i).setPreFetchCallback(j);
        },
        updateData: function(i) {
            var j = i.set_id;
            if (!this._photoCache[j]) {
                this._photoCache[j] = new i.cache_class(i);
                this.runPostCreateCallback(j);
            } else if (i.query_metadata.action == h.actions.UPDATE) {
                this._photoCache[j].updateData(i);
            } else this._photoCache[j].addData(i);
        },
        updateFeedbackData: function(i) {
            var j = Object.keys(i);
            j.forEach(function(k) {
                return h.getAllByIDImmediate(k).forEach(function(l) {
                    l.feedback = i[k].feedback;
                });
            });
        },
        reset: function() {
            Object.keys(this._photoCache).forEach(function(i) {
                return this.clearSetCache(i);
            }.bind(this));
        }
    };
    f.exports = h;
}, null);
__d('PhotoStore', ['Arbiter', 'PhotoStoreCore'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    c('Arbiter').subscribe('update-photos', function(h, i) {
        c('PhotoStoreCore').updateData(i);
    });
    f.exports = c('PhotoStoreCore');
}, null);
__d('MessagesViewer', ['AsyncRequest', 'DOM', 'MessagesViewerSetID', 'PhotoStore', 'React', 'ReactDOM', 'emptyFunction', 'ge'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        renderSpotlight: function(j, k, l, m) {
            var n = j.setID;
            if (!n) n = c('MessagesViewerSetID').MESSAGES;
            i(c('React').createElement(l, {
                actorid: j.actorid,
                dimensions: [j.dimensions],
                disablepaging: j.disablePaging,
                disableForward: j.disableForward,
                forwardDialogComponent: m,
                open: true,
                photoid: j.fbid,
                reverse: false,
                rootClassName: j.rootClassName,
                setid: n,
                snapToPhoto: j.snapToPhoto,
                thumbsrc: j.src
            }));
            if (!c('PhotoStore').hasBeenCreated(n) && j.endpoint) {
                var o = new(c('AsyncRequest'))(j.endpoint);
                if (k) o.setRelativeTo(k);
                o.send();
            }
        },
        renderVideo: function(j) {
            i(j);
        }
    };

    function i(j) {
        var k = c('ge')('messages_viewer');
        if (!k) {
            k = c('DOM').create('div', {
                id: 'messages_viewer'
            });
            document.body.appendChild(k);
        }
        j = c('ReactDOM').render(j, k);
        j.subscribeOnce('close', function() {
            c('ReactDOM').unmountComponentAtNode(k);
        });
    }
    f.exports = h;
}, null);
__d('MercuryAttachmentViewer', ['Bootloader', 'MessagesViewer', 'React', 'Run', 'emptyFunction'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        renderVideo: function(i) {
            c('Bootloader').loadModules(["MessagingVideoViewer.react", "MessagingForwardAttachmentDialog.react"], function(j, k) {
                c('MessagesViewer').renderVideo(c('React').createElement(j, babelHelpers['extends']({}, i, {
                    forwardDialogComponent: k
                })));
            }, 'MercuryAttachmentViewer');
        },
        bootstrapWithElem: function(i) {
            h.bootstrapWithConfig({
                fbid: i.getAttribute('data-fbid'),
                dimensions: i.getAttribute('data-dimensions'),
                src: i.getAttribute('href'),
                endpoint: i.getAttribute('data-endpoint'),
                disablePaging: i.getAttribute('data-disablepaging')
            }, i);
        },
        bootstrapWithConfig: function(i, j) {
            c('Bootloader').loadModules(["SpotlightMessagesViewer", "MessagingForwardAttachmentDialog.react"], function(k, l) {
                c('MessagesViewer').renderSpotlight(i, j, k, l);
            }, 'MercuryAttachmentViewer');
        },
        preload: function() {
            c('Run').onAfterLoad(function() {
                c('Bootloader').loadModules(["MessagingVideoViewer.react", "SpotlightMessagesViewer", "MessagingForwardAttachmentDialog.react"], c('emptyFunction'), 'MercuryAttachmentViewer');
            });
        }
    };
    f.exports = h;
}, null);
__d('ChatEditParticipantsUtils', ['AsyncDialog', 'AsyncRequest', 'MercuryIDs', 'MercuryThreadIDMap', 'URI'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = c('MercuryThreadIDMap').get(),
        i = {
            showParticipantsModal: function(j) {
                if (!c('MercuryIDs').isGroupChat(j)) return;
                h.getServerIDFromClientID(j, function(k) {
                    c('AsyncDialog').send(new(c('AsyncRequest'))(new(c('URI'))('/ajax/browser/dialog/multichat_members/').addQueryData({
                        id: k
                    })));
                });
            }
        };
    f.exports = i;
}, null);
__d('MessengerAdminGroupUtils', ['fbt', 'MercuryConfig', 'MercuryIDs', 'MessengerApprovalModeTypes', 'MessengerJoinableModeType', 'WorkModeConfig'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = {
        isJoinableAndOpenThread: function(j) {
            return this.isJoinableThread(j) && this.isApprovalOpenThread(j);
        },
        isJoinableAndApprovalRequiredThread: function(j) {
            return !!(this.isJoinableThread(j) && j && j.approval_mode === c('MessengerApprovalModeTypes').APPROVALS);
        },
        shouldAddToApprovalQueue: function(j, k) {
            return !!(this.isJoinableAndApprovalRequiredThread(j) && j && !i.isViewerAdmin(j.admin_ids, k));
        },
        isJoinableThread: function(j) {
            return !!(c('MercuryConfig').WWWJoinableMasterGK && j && j.is_thread_queue_enabled === true && j.joinable_mode && j.joinable_mode.mode === c('MessengerJoinableModeType').JOINABLE);
        },
        isApprovalOpenThread: function(j) {
            return !!(c('MercuryConfig').WWWJoinableMasterGK && j && j.approval_mode === c('MessengerApprovalModeTypes').OPEN);
        },
        isOwner: function(j, k) {
            return j && this.isJoinableThread(k);
        },
        canSeeGroupOptions: function(j, k, l) {
            var m = k.is_canonical,
                n = c('WorkModeConfig').is_work_user;
            return c('MercuryConfig').WWWJoinableMasterGK && !m && !n && (i.showJoinableToggle(k, l) || i.showJoinableLink(k) || i.showJoinableApprovalToggle(k, l) || i.showApprovalQueue(k, l));
        },
        canMakeOthersAdmins: function(j, k, l) {
            return this.isOwner(j, l) && !k;
        },
        canRemoveAdmin: function(j, k, l) {
            return this.isOwner(j, l) && k;
        },
        canRemoveFromGroup: function(j, k) {
            return this.isOwner(j, k) || !this.isJoinableThread(k);
        },
        showJoinableToggle: function(j, k) {
            var l = i.isJoinableThread(j),
                m = i.isViewerAdmin(j.admin_ids, k),
                n = i.isOwner(m, j),
                o = c('MercuryIDs').getParticipantIDFromUserID(k),
                p = j.participants.indexOf(o) !== -1;
            return (l && n || c('MercuryConfig').WWWJoinableMasterGK && c('MercuryConfig').WWWJoinableRolloutGK && !l && j.is_thread_queue_enabled && p);
        },
        showJoinableLink: function(j) {
            var k = !!(j && j.joinable_mode && j.joinable_mode.link),
                l = i.isJoinableThread(j);
            return l && k;
        },
        showJoinableApprovalToggle: function(j, k) {
            var l = i.isViewerAdmin(j.admin_ids, k);
            return i.isOwner(l, j);
        },
        showApprovalQueue: function(j, k) {
            var l = i.isViewerAdmin(j.admin_ids, k),
                m = i.isOwner(l, j),
                n = 0;
            if (j && j.approval_queue_ids && j.approval_queue_ids.length) n = j.approval_queue_ids.length;
            var o = i.isJoinableAndApprovalRequiredThread(j);
            return (o && m && n > 0);
        },
        showParticipantsModal: function(j, k, l) {
            return this.isJoinableThread(l) && !j && !k;
        },
        isViewerAdmin: function(j, k) {
            return this.isAdmin(j, c('MercuryIDs').getParticipantIDFromUserID(k));
        },
        isAdmin: function(j, k) {
            return j !== null && j !== undefined && j.indexOf(k) !== -1;
        },
        getLeaveGroupBodyText: function(j, k) {
            return this.isOwner(j, k) ? h._("Leaving this group will remove you as an owner and allow other members to manage the group. You will no longer be able to send or receive new messages.") : h._("You will stop receiving messages from this conversation and people will see that you left.");
        },
        getLeaveGroupTitleText: function(j, k) {
            return this.isOwner(j, k) ? h._("Leave this conversation?") : h._("Leave Conversation?");
        },
        getLeaveGroupButtonText: function(j, k) {
            return this.isOwner(j, k) ? h._("Leave converstaion") : h._("Leave");
        },
        getMakeOwnerBodyText: function(j, k) {
            return j ? h._("As a group owner, you will be able to manage group ownership and remove members from the conversation. Only owners will be able to add other owners.") : h._("As a group owner, \"{owner's name}\" will be able to manage group ownership and remove members from the conversation. They will be able to remove ownership from other owners.", [h.param('owner\'s name', k)]);
        },
        getMakeOwnerTitleText: function(j) {
            return j ? h._("Become group owner?") : h._("Add group owner?");
        },
        getMakeOwnerButtonText: function(j) {
            return j ? h._("Become owner") : h._("Make owner");
        },
        getRemoveOwnerBodyText: function(j, k, l) {
            var m = void 0;
            if (j && k) {
                m = h._("You will no longer manage group ownership and remove members from this conversation. You will still be a participant in the group. Any other member will be able to own the group.");
            } else if (j && !k) {
                m = h._("You will no longer manage group ownership and remove members from this conversation. You will still be a participant in the group.");
            } else m = h._("\"{owner's name}\" will no longer manage group ownership and remove members from the conversation. They will still be a participant in the group.", [h.param('owner\'s name', l)]);
            return m;
        }
    };
    f.exports = i;
}, null);
__d('MessengerHotLikePreviewEvents', ['mixInEventEmitter'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        START: 'start',
        STOP: 'stop',
        POP: 'pop',
        REMOVE: 'remove',
        FINISH_ANIMATION: 'finish_animation'
    };
    c('mixInEventEmitter')(h, {
        start: true,
        stop: true,
        pop: true,
        remove: 'remove',
        finish_animation: 'finish_animation'
    });
    f.exports = h;
}, null);
__d('MessengerHotLikeUtils', ['EmojiLikeConstants', 'StickerAssetType', 'StickerConstants', 'XStickerAssetController'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        SizeTimes: {
            small: 1000,
            medium: 2000,
            large: 3000
        },
        getStickerIDForTime: function(i) {
            var j = null;
            switch (true) {
                case i < this.SizeTimes.small:
                    j = c('StickerConstants').HOT_LIKE_SMALL_STICKER_ID;
                    break;
                case i < this.SizeTimes.medium:
                    j = c('StickerConstants').HOT_LIKE_MEDIUM_STICKER_ID;
                    break;
                case i < this.SizeTimes.large:
                    j = c('StickerConstants').HOT_LIKE_LARGE_STICKER_ID;
                    break;
            }
            return j;
        },
        getEmojiSizeForTime: function(i) {
            var j = null;
            if (i < this.SizeTimes.small) {
                j = c('EmojiLikeConstants').size.SMALL;
            } else if (i < this.SizeTimes.medium) {
                j = c('EmojiLikeConstants').size.MEDIUM;
            } else if (i < this.SizeTimes.large) j = c('EmojiLikeConstants').size.LARGE;
            return j;
        },
        getMetadataForHotLike: function(i) {
            var j = void 0;
            switch (i) {
                case c('StickerConstants').HOT_LIKE_LARGE_STICKER_ID:
                    j = 120;
                    break;
                case c('StickerConstants').HOT_LIKE_MEDIUM_STICKER_ID:
                    j = 84;
                    break;
                case c('StickerConstants').HOT_LIKE_SMALL_STICKER_ID:
                    j = 35;
                    break;
                case c('EmojiLikeConstants').size.LARGE:
                    j = 64;
                    break;
                case c('EmojiLikeConstants').size.MEDIUM:
                    j = 64;
                    break;
                case c('EmojiLikeConstants').size.SMALL:
                    j = 32;
                    break;
            }
            return j ? {
                height: j,
                width: j
            } : undefined;
        },
        getPreviewURI: function() {
            return c('XStickerAssetController').getURIBuilder().setInt('sticker_id', c('StickerConstants').HOT_LIKE_LARGE_STICKER_ID).setEnum('image_type', c('StickerAssetType').IMAGE).getURI().toString();
        },
        getURIWithID: function(i) {
            return c('XStickerAssetController').getURIBuilder().setInt('sticker_id', i).setEnum('image_type', c('StickerAssetType').IMAGE).getURI().toString();
        },
        getCustomEmojiFromThread: function(i) {
            return i && i.custom_like_icon;
        }
    };
    f.exports = h;
}, null);
__d('MNCommerceActionTypes', ['keyMirrorRecursive'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = c('keyMirrorRecursive')({
        RECEIPT: {
            LOADED: null,
            LOAD_ERROR: null,
            RELOAD: null
        },
        SHIPMENT: {
            LOADED: null,
            LOAD_ERROR: null,
            RELOAD: null
        },
        DIALOG: {
            SHOW: null,
            HIDE: null
        },
        RETAIL_ITEM: {
            LOADED: null,
            LOAD_ERROR: null,
            RELOAD: null
        },
        PROMOTION_STATE: {
            LOADED: null,
            LOAD_ERROR: null,
            RELOAD: null
        },
        TRANSACTION_INVOICE: {
            LOADED: null,
            LOAD_ERROR: null,
            RELOAD: null
        },
        BOT_REVIEW_STATE: {
            LOADED: null,
            LOAD_ERROR: null,
            RELOAD: null
        },
        BOTS_MENU: {
            SHOW: null,
            HIDE: null,
            LOADED: null,
            VISIBILITY_LOADED: null,
            LOAD_ERROR: null,
            RELOAD: null
        }
    });
    f.exports = h;
}, null);
__d('MessengerContextBannerBootloader', ['BootloadedComponent.react', 'CurrentUser', 'DOM', 'JSResource', 'React', 'ReactDOM'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h(k, l, m, n, o) {
        var p = c('DOM').create('div');
        i(k, l, function(q) {
            c('ReactDOM').render(q, p, m(p));
        }, n, o);
    }

    function i(k, l, m, n, o, p) {
        p = babelHelpers['extends']({
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0
        }, p);
        j({
            otherUserFBIDs: n && [n],
            threadID: k,
            style: p
        }, l, m, o);
    }

    function j(k, l, m, n) {
        m(c('React').createElement(c('BootloadedComponent.react'), babelHelpers['extends']({
            bootloadPlaceholder: c('React').createElement('div', {
                style: {
                    height: 80
                }
            }),
            bootloadLoader: c('JSResource')('MessengerContextBannerContainer.react').__setRef('MessengerContextBannerBootloader'),
            location: l,
            onResize: n,
            viewer: c('CurrentUser').getID()
        }, k)));
    }
    f.exports = {
        bootload: h,
        getBootloadedComponent: i
    };
}, null);
__d('MessengerButton.react', ['cx', 'Link.react', 'React', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    'use strict';
    var i, j;
    if (c.__markCompiled) c.__markCompiled();
    var k = c('React').PropTypes;
    i = babelHelpers.inherits(l, c('React').PureComponent);
    j = i && i.prototype;

    function l() {
        var m, n;
        for (var o = arguments.length, p = Array(o), q = 0; q < o; q++) p[q] = arguments[q];
        return m = (n = j.constructor).call.apply(n, [this].concat(p)), this.handleLinkClick = function(r) {
            if (this.props.disabled) {
                r.preventDefault();
            } else if (this.props.onClick) this.props.onClick(r);
        }.bind(this), m;
    }
    l.prototype.render = function() {
        var m = this.props,
            n = m.className,
            o = m.label,
            p = babelHelpers.objectWithoutProperties(m, ['className', 'label']),
            q = babelHelpers['extends']({
                className: c('joinClasses')("_3quh" + (' ' + "_30yy") + (this.props.type === 'primary' ? ' ' + "_2t_" : '') + (this.props.type === 'secondary' ? ' ' + "_2u0" : '') + (this.props.use === 'danger' ? ' ' + "_3ay_" : '') + (this.props.disabled ? ' ' + "_4zab" : ''), n)
            }, p, {
                onClick: this.handleLinkClick
            });
        return (this.props.href ? c('React').createElement(c('Link.react'), q, o) : c('React').createElement('span', {
            className: "_30vt"
        }, c('React').createElement('button', q, o)));
    };
    l.propTypes = {
        label: k.oneOfType([k.string, k.element]),
        type: k.oneOf(['primary', 'secondary']).isRequired,
        use: k.oneOf(['default', 'danger']).isRequired
    };
    l.defaultProps = {
        use: 'default'
    };
    f.exports = l;
}, null);
__d('MessengerDialog.react', ['cx', 'LayerFadeOnHide', 'LayerHideOnEscape', 'React', 'XUIDialog.react', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'MessengerDialog',
            propTypes: {
                onToggle: i.func.isRequired,
                repositionOnUpdate: i.bool,
                shown: i.bool,
                type: i.oneOf(['alert', 'default']),
                width: i.number
            },
            getDefaultProps: function() {
                return {
                    repositionOnUpdate: false,
                    shown: true,
                    type: 'alert',
                    width: 400
                };
            },
            componentDidUpdate: function() {
                if (this.props.repositionOnUpdate) setTimeout(function() {
                    if (this.isMounted() && this.refs.dialog && this.refs.dialog.layer) this.refs.dialog.layer.updatePosition();
                }.bind(this), 0);
            },
            render: function() {
                return (c('React').createElement(c('XUIDialog.react'), babelHelpers['extends']({
                    behaviors: {
                        LayerFadeOnHide: c('LayerFadeOnHide'),
                        LayerHideOnEscape: c('LayerHideOnEscape')
                    }
                }, this.props, {
                    className: c('joinClasses')("_4ebx", this.props.className),
                    ref: 'dialog'
                }), c('React').createElement('div', {
                    className: "_4eby" + (this.props.type === 'alert' ? ' ' + "_2c9g" : '') + (this.props.type === 'default' ? ' ' + "_2c9i" : '')
                }, this.props.children)));
            }
        });
    f.exports = j;
}, null);
__d('MessengerDialogBody.react', ['cx', 'React', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    'use strict';
    var i, j;
    if (c.__markCompiled) c.__markCompiled();
    i = babelHelpers.inherits(k, c('React').Component);
    j = i && i.prototype;
    k.prototype.render = function() {
        return (c('React').createElement('div', {
            className: c('joinClasses')("_4eb-", this.props.className)
        }, this.props.children));
    };

    function k() {
        i.apply(this, arguments);
    }
    f.exports = k;
}, null);
__d('MessengerDialogButton.react', ['cx', 'MessengerButton.react', 'React', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    'use strict';
    var i, j;
    if (c.__markCompiled) c.__markCompiled();
    var k = c('React').PropTypes;
    i = babelHelpers.inherits(l, c('React').PureComponent);
    j = i && i.prototype;
    l.prototype.render = function() {
        var m = this.props,
            n = m.action,
            o = m.className,
            p = babelHelpers.objectWithoutProperties(m, ['action', 'className']);
        return (c('React').createElement(c('MessengerButton.react'), babelHelpers['extends']({
            className: c('joinClasses')(o, "_5ixy" + (n === 'button' ? ' ' + "layerButton" : '') + (n === 'cancel' ? ' ' + "layerCancel" : '') + (n === 'confirm' ? ' ' + "layerConfirm" : ''))
        }, p)));
    };

    function l() {
        i.apply(this, arguments);
    }
    l.propTypes = {
        action: k.oneOf(['button', 'cancel', 'confirm'])
    };
    f.exports = l;
}, null);
__d('MessengerDialogFooter.react', ['cx', 'LeftRight.react', 'React', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    'use strict';
    var i, j;
    if (c.__markCompiled) c.__markCompiled();
    var k = c('React').PropTypes;
    i = babelHelpers.inherits(l, c('React').Component);
    j = i && i.prototype;
    l.prototype.render = function() {
        return (c('React').createElement('div', {
            className: c('joinClasses')("_4eb_", this.props.className)
        }, c('React').createElement(c('LeftRight.react'), null, c('React').createElement('div', {
            className: "_2_d1"
        }, this.props.leftContent), c('React').createElement('div', null, this.props.children))));
    };

    function l() {
        i.apply(this, arguments);
    }
    l.propTypes = {
        leftContent: k.object
    };
    f.exports = l;
}, null);
__d('MessengerDialogHeader.react', ['cx', 'React', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    'use strict';
    var i, j;
    if (c.__markCompiled) c.__markCompiled();
    i = babelHelpers.inherits(k, c('React').Component);
    j = i && i.prototype;
    k.prototype.render = function() {
        return (c('React').createElement('h2', {
            className: c('joinClasses')("_4ebz", this.props.className),
            id: this.props.id
        }, this.props.children));
    };

    function k() {
        i.apply(this, arguments);
    }
    f.exports = k;
}, null);
__d('messengerCustomColorUtils', [], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h(i, j) {
        j = j || {};
        j.backgroundColor = i;
        return j;
    }
    f.exports = {
        customBubbleStyle: h
    };
}, null);
__d('MNCommerceCacheTimeoutLimits', [], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        SUCCESS_TIMEOUT: 10,
        ERROR_TIMEOUT: 1
    };
    f.exports = h;
}, null);
__d('MessageRequestUtils', ['MessagingTag'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        isMessageRequest: function(i) {
            return (i.folder === c('MessagingTag').PENDING || i.folder === c('MessagingTag').OTHER) && i.can_reply;
        },
        isFiltered: function(i) {
            return i.folder === c('MessagingTag').OTHER;
        }
    };
    f.exports = h;
}, null);
__d('MercuryTypingReceiver', ['Arbiter', 'ChannelConstants', 'FBID', 'MercuryActionType', 'MercuryIDs', 'MercuryPayloadSource', 'MercuryDispatcher', 'MercurySingletonMixin', 'MercuryThreadIDMap', 'MercuryViewer', 'TypingStates', 'isEmpty', 'mixInEventEmitter', 'setTimeoutAcrossTransitions'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('MercuryThreadIDMap').get(),
        i = 30000;

    function j(k) {
        'use strict';
        this.$MercuryTypingReceiver1 = null;
        this.$MercuryTypingReceiver2 = {};
        this.$MercuryTypingReceiver3 = c('MercuryDispatcher').getForFBID(k);
        this.$MercuryTypingReceiver3.subscribe('update-typing-state', function(m, n) {
            var o = n.payload_source;
            if (o != c('MercuryPayloadSource').CLIENT_CHANNEL_MESSAGE) return;
            var p = n.actions;
            if (!p || !p.length) return;
            var q = c('MercuryActionType').USER_GENERATED_MESSAGE;
            p.forEach(function(r) {
                if (r.action_type == q && r.author != c('MercuryViewer').getID()) this.$MercuryTypingReceiver4(r.thread_id, r.author);
            }.bind(this));
        }.bind(this));
        var l;
        if (c('FBID').isUser(k)) {
            l = [c('ChannelConstants').getArbiterType('typ'), c('ChannelConstants').getArbiterType('ttyp')];
        } else l = [c('ChannelConstants').getArbiterType('page_typing')];
        c('Arbiter').subscribe(l, function(m, n) {
            var o = n.obj,
                p = this.$MercuryTypingReceiver5(o);
            if (p) {
                var q = c('MercuryIDs').getParticipantIDFromUserID(o.from.toString());
                if (o.st == c('TypingStates').TYPING) {
                    this.$MercuryTypingReceiver2[p] = this.$MercuryTypingReceiver2[p] || {};
                    var r = this.$MercuryTypingReceiver2[p][q];
                    this.$MercuryTypingReceiver2[p][q] = Date.now();
                    if (!this.$MercuryTypingReceiver1) this.$MercuryTypingReceiver1 = c('setTimeoutAcrossTransitions')(function() {
                        this.$MercuryTypingReceiver6();
                    }.bind(this), 3000);
                    !r && this.$MercuryTypingReceiver7(p);
                } else if (o.st == c('TypingStates').INACTIVE) this.$MercuryTypingReceiver4(p, q);
            }
        }.bind(this));
    }
    j.prototype.$MercuryTypingReceiver8 = function(k) {
        'use strict';
        var l = this.$MercuryTypingReceiver2[k] || {},
            m = Object.keys(l);
        m.sort(function(n, o) {
            return l[n] - l[o];
        });
        return m;
    };
    j.prototype.$MercuryTypingReceiver6 = function() {
        'use strict';
        this.$MercuryTypingReceiver1 = null;
        var k = Date.now(),
            l = {},
            m = false;
        for (var n in this.$MercuryTypingReceiver2) {
            var o = false;
            for (var p in this.$MercuryTypingReceiver2[n] || {})
                if (this.$MercuryTypingReceiver2[n][p] < k - i) {
                    delete this.$MercuryTypingReceiver2[n][p];
                    o = true;
                } else m = true;
            if (o) l[n] = this.$MercuryTypingReceiver8(n);
        }
        if (!c('isEmpty')(l)) this.$MercuryTypingReceiver9(l);
        if (m) this.$MercuryTypingReceiver1 = c('setTimeoutAcrossTransitions')(function() {
            this.$MercuryTypingReceiver6();
        }.bind(this), 3000);
    };
    j.prototype.$MercuryTypingReceiver4 = function(k, l) {
        'use strict';
        if (k in this.$MercuryTypingReceiver2)
            if (l in this.$MercuryTypingReceiver2[k]) {
                delete this.$MercuryTypingReceiver2[k][l];
                this.$MercuryTypingReceiver7(k);
            }
    };
    j.prototype.$MercuryTypingReceiver9 = function(k) {
        'use strict';
        this.releaseHeldEventType('state-changed');
        this.emitAndHold('state-changed', k);
    };
    j.prototype.$MercuryTypingReceiver7 = function(k) {
        'use strict';
        var l = {};
        l[k] = this.$MercuryTypingReceiver8(k);
        this.$MercuryTypingReceiver9(l);
    };
    j.prototype.$MercuryTypingReceiver5 = function(k) {
        'use strict';
        if (k.thread_fbid) return h.getClientIDFromServerIDNow(k.thread_fbid.toString());
        if (k.type === 'typ' || k.type === 'page_typing') return c('MercuryIDs').getThreadIDFromUserID(k.from.toString());
        return null;
    };
    c('mixInEventEmitter')(j, {
        'state-changed': true
    });
    Object.assign(j, c('MercurySingletonMixin'));
    f.exports = j;
}, null);
__d('MercuryIndicatorController', ['fbt', 'ArbiterMixin', 'DOM', 'MercuryActionType', 'MercuryDelayedRoger', 'MercuryIDs', 'MercuryMessageSourceTags', 'MercuryParticipants', 'MercuryRoger', 'MercurySourceType', 'MercuryThreads', 'MercuryTypingReceiver', 'MercuryViewer', 'WorkModeConfig', 'arrayContains', 'formatDate', 'removeFromArray'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = c('MercuryDelayedRoger').get(),
        j = c('MercuryRoger').get(),
        k = c('MercuryThreads').get(),
        l = c('MercuryTypingReceiver').get(),
        m = [];

    function n(o) {
        this._threadID = o;
        this._canonicalUser = c('MercuryIDs').getUserIDFromThreadID(o);
        m.push(this);
    }
    Object.assign(n.prototype, c('ArbiterMixin'), {
        destroy: function() {
            c('removeFromArray')(m, this);
        },
        setLastMessage: function(o) {
            this._lastMsg = o;
            this._handleStateChange();
        },
        _informStateChanged: function(o) {
            if (o.activity == 'none' && this._currentActivity == 'none') return;
            if (this._lastMsg && c('MercuryViewer').isViewer(this._lastMsg.author)) o.self_authored = true;
            this._currentActivity = o.activity;
            this.inform('state-changed', o);
        },
        _notifySentFrom: function() {
            var o, p, q = this._lastMsg.source_tags || this._lastMsg.tags || [];
            if (c('arrayContains')(q, c('MercuryMessageSourceTags').MESSENGER)) {
                if (!c('WorkModeConfig').is_work_user) {
                    o = c('DOM').create('a', {
                        href: '/mobile/messenger',
                        'class': 'fcg',
                        target: '_blank'
                    }, h._("Sent from Messenger"));
                } else o = c('DOM').create('a', {
                    href: '/mobile',
                    'class': 'fcg',
                    target: '_blank'
                }, h._("Sent from Work Chat"));
                p = 'sentFromMobile';
            } else if (c('arrayContains')(q, c('MercuryMessageSourceTags').MOBILE)) {
                o = c('DOM').create('a', {
                    href: '/mobile',
                    'class': 'fcg',
                    target: '_blank'
                }, h._("Sent from Mobile"));
                p = 'sentFromMobile';
            } else if (c('arrayContains')(q, c('MercuryMessageSourceTags').EMAIL)) {
                o = h._("Sent from email");
                p = 'sentFromEmail';
            } else if (c('arrayContains')(q, c('MercurySourceType').MESSENGER_COMMERCE)) {
                p = 'sentFromMessengerCommerce';
            } else {
                this._informStateChanged({
                    activity: 'none'
                });
                return;
            }
            this._informStateChanged({
                activity: p,
                text: o
            });
        },
        _notifySeenTimestamp: function(o) {
            var p = j.getSeenTimestamp(this._threadID, o[0]) * .001,
                q = Date.now() * .001,
                r;
            if (p < q - 518400) {
                r = 'M j';
            } else if (p < q - 86400) {
                r = 'D g:ia';
            } else r = 'g:ia';
            this._informStateChanged({
                activity: 'seen-timestamp',
                text: h._("Seen {timestamp}", [h.param('timestamp', c('formatDate')(p, r))])
            });
        },
        _nameNormalizer: function(o) {
            var p;
            c('MercuryParticipants').getMulti(o, function(q) {
                function r(t) {
                    if (q[t] !== undefined && q[t].short_name) {
                        return q[t].short_name.toLowerCase();
                    } else return t;
                }
                var s = o.map(r);
                p = function(t) {
                    var u = r(t),
                        v = s.indexOf(u) !== s.lastIndexOf(u);
                    return v ? q[t].name : q[t].short_name;
                };
            });
            return p;
        },
        _seenByEveryone: function(o, p, q) {
            var r = q ? q.participants.length : 0,
                s = o.length;
            if (p.author != c('MercuryViewer').getID() && (!q || q.participants.indexOf(p.author) > -1)) s++;
            return r > 2 && s >= r - 1;
        },
        _notifySeenBy: function(o) {
            var p = this._lastMsg,
                q = true;
            c('MercuryParticipants').getMulti(o, function(r) {
                q = false;
                if (this._lastMsg != p) return;
                var s = k.getThreadMetaNow(this._threadID),
                    t = null;
                if (s && s.custom_nickname) t = s.custom_nickname;
                var u = [];
                for (var v in r) {
                    var w = r[v],
                        x = w.short_name;
                    if (t && t[w.fbid]) x = t[w.fbid];
                    u[v] = x;
                }
                var y, z = false;
                if (this._seenByEveryone(o, p, s)) {
                    y = {
                        prefix: 'Seen by everyone'
                    };
                } else if (o.length == 1) {
                    y = {
                        prefix: 'Seen by ',
                        names: ' ' + u[o[0]]
                    };
                } else if (o.length == 2) {
                    y = {
                        prefix: 'Seen by ',
                        names: ' ' + u[o[0]] + ', ' + u[o[1]]
                    };
                } else if (o.length == 3) {
                    y = {
                        prefix: 'Seen by ',
                        names: ' ' + u[o[0]] + ', ' + u[o[1]] + ', ' + u[o[2]]
                    };
                } else if (o.length > 3) {
                    y = {
                        prefix: 'Seen by ',
                        names: ' ' + u[o[0]] + ', ' + u[o[1]] + ', '
                    };
                    z = true;
                }
                this._informStateChanged({
                    activity: 'seen-by',
                    text: y,
                    seenBy: o,
                    showTooltip: z
                });
            }.bind(this));
            q && this._informStateChanged({
                activity: 'none'
            });
        },
        _notifyTyping: function(o) {
            var p = this._lastMsg,
                q = true;
            c('MercuryParticipants').getMulti(o, function(r) {
                q = false;
                if (this._lastMsg != p) return;
                var s = k.getThreadMetaNow(this._threadID),
                    t = s ? s.participants.length : 0,
                    u;
                if (s) u = this._nameNormalizer(s.participants);
                if (!u) u = function(aa) {
                    return r[aa].short_name;
                };
                var v, w = false;
                if (t > 2 && o.length >= t - 1) {
                    v = h._("Everyone is typing...");
                } else if (o.length == 1) {
                    v = h._("{name} is typing...", [h.param('name', r[o[0]].short_name)]);
                } else if (o.length == 2) {
                    v = h._("{user1} and {user2} are typing...", [h.param('user1', r[o[0]].short_name), h.param('user2', r[o[1]].short_name)]);
                } else if (o.length == 3) {
                    v = h._("{user1}, {user2}, and {user3} are typing...", [h.param('user1', r[o[0]].short_name), h.param('user2', r[o[1]].short_name), h.param('user3', r[o[2]].short_name)]);
                } else if (o.length > 3) {
                    var x = Object.keys(r).length - 2,
                        y = h._({
                            "*": "{num} more"
                        }, [h.param('num', x, [0])]),
                        z = c('DOM').create('a', {
                            href: '#'
                        }, y);
                    v = h._("{user1}, {user2}, and {=num more link} are typing...", [h.param('user1', r[o[0]].short_name), h.param('user2', r[o[1]].short_name), h.param('=num more link', z)]);
                    w = true;
                }
                this._informStateChanged({
                    activity: 'typing',
                    text: v,
                    typing: o,
                    showTooltip: w
                });
            }.bind(this));
            q && this._informStateChanged({
                activity: 'none'
            });
        },
        _handleStateChange: function() {
            var o = c('MercuryActionType').LOG_MESSAGE;
            if (!this._lastMsg || this._lastMsg.action_type == o) {
                this._informStateChanged({
                    activity: 'none'
                });
                return;
            }
            if (this._typing && this._typing.length) {
                this._notifyTyping(this._typing);
                return;
            }
            if (this._canonicalUser && this._lastMsg.author != c('MercuryViewer').getID()) {
                this._notifySentFrom();
                return;
            }
            var p = i.getSeenBy(this._threadID, true);
            if (p.length)
                if (this._canonicalUser) {
                    this._notifySeenTimestamp(p);
                    return;
                } else {
                    this._notifySeenBy(p);
                    return;
                }
            this._informStateChanged({
                activity: 'none'
            });
        }
    });
    l.addRetroactiveListener('state-changed', function(o) {
        m.forEach(function(p) {
            var q = o[p._threadID];
            if (q !== undefined) {
                p._typing = q;
                p._handleStateChange();
            }
        });
    });
    i.subscribe('state-changed', function(o, p) {
        m.forEach(function(q) {
            p[q._threadID] && q._handleStateChange();
        });
    });
    f.exports = n;
}, null);
__d('MercuryLastMessageIndicator.react', ['cx', 'fbt', 'DOM', 'MercuryIndicatorController', 'MessengerTextWithEmoticons.react', 'MercuryParticipants', 'React', 'ReactDOM', 'TooltipData', 'emptyFunction', 'joinClasses'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = c('React').createClass({
            displayName: 'MercuryLastMessageIndicator',
            propTypes: {
                hideTyping: j.bool,
                indicatorWillShow: j.func,
                indicatorDidShow: j.func,
                lastMessage: j.object,
                threadID: j.string.isRequired
            },
            getDefaultProps: function() {
                return {
                    indicatorWillShow: c('emptyFunction'),
                    indicatorDidShow: c('emptyFunction')
                };
            },
            getInitialState: function() {
                return {
                    data: {}
                };
            },
            componentDidMount: function() {
                this._setup(this.props);
            },
            componentWillReceiveProps: function(l) {
                if (l.threadID != this.props.threadID) {
                    this._destroy();
                    this._setup(l);
                } else if (l.lastMessage != this.props.lastMessage) this._controller.setLastMessage(l.lastMessage);
            },
            componentWillUpdate: function(l, m) {
                if (this.isVisible(l, m)) this.props.indicatorWillShow();
            },
            componentDidUpdate: function() {
                if (!this.isVisible()) return;
                if (!this.isSeenBy()) {
                    this.setText();
                    this.setTooltip();
                }
                this.props.indicatorDidShow();
            },
            componentWillUnmount: function() {
                this._destroy();
            },
            render: function() {
                if (this.isSeenBy()) {
                    var l = this._renderText(this.state.data);
                    return (c('React').createElement('div', {
                        className: this.getRootClass()
                    }, c('React').createElement('div', {
                        className: "_510h"
                    }), c('React').createElement('span', {
                        className: "_510f"
                    }, l)));
                } else return (c('React').createElement('div', {
                    className: this.getRootClass()
                }, c('React').createElement('div', {
                    className: "_510h"
                }), c('React').createElement('span', {
                    className: "_510f",
                    ref: 'text'
                }, ' ')));
            },
            getRootClass: function() {
                var l = "_510g" + (this.state.data.self_authored ? ' ' + "_510e" : ''),
                    m = this.state.data.activity,
                    n = null;
                if (String(m).startsWith('seen')) {
                    n = 'seen';
                } else if (m == 'typing') {
                    n = this.props.hideTyping ? null : m;
                } else n = m;
                return c('joinClasses')(l, n, this.props.className);
            },
            isVisible: function(l, m) {
                l = l || this.props;
                m = m || this.state;
                return (m.data && m.data.activity != 'none' && !(l.hideTyping && m.data.activity == 'typing'));
            },
            isSeenBy: function(l, m) {
                l = l || this.props;
                m = m || this.state;
                return (m.data && m.data.activity === 'seen-by');
            },
            setText: function() {
                if (this.state.data.text) c('DOM').setContent(c('ReactDOM').findDOMNode(this.refs.text), this.state.data.text);
            },
            setTooltip: function() {
                if (this.state.data.activity === 'seen-by' && this.state.data.showTooltip) c('MercuryParticipants').getMulti(this.state.data.seenBy, function(l) {
                    var m = c('DOM').create('div', null, this.state.data.seenBy.map(function(n) {
                        return c('DOM').create('div', null, l[n].name);
                    }));
                    c('TooltipData').set(c('DOM').find(c('ReactDOM').findDOMNode(this), 'span.more'), m, 'above', 'center');
                }.bind(this));
            },
            _renderText: function(l) {
                var m = l && l.text;
                if (!m) return null;
                if (!m.names) {
                    return i._("Seen by everyone");
                } else {
                    var n = c('React').createElement(c('MessengerTextWithEmoticons.react'), {
                        renderEmoji: true,
                        renderEmoticons: true,
                        text: m.names
                    });
                    if (!l.showTooltip) {
                        return i._("Seen by {names}", [i.param('names', n)]);
                    } else {
                        var o = this._renderTooltip(l);
                        return i._("Seen by {names}{=num more link}", [i.param('names', n), i.param('=num more link', o)]);
                    }
                }
            },
            _renderTooltip: function(l) {
                if (!l || !l.text || !l.showTooltip) return null;
                var m = {},
                    n = 0;
                if (l.activity === 'seen-by') {
                    var o = null;
                    c('MercuryParticipants').getMulti(l.seenBy, function(q) {
                        o = l.seenBy.map(function(r) {
                            return q[r].name;
                        }).join('\r\n');
                        n = Object.keys(q).length - 2;
                    });
                    m = Object.assign({
                        'data-tooltip-alignh': 'center'
                    }, c('TooltipData').propsFor(o, 'above'));
                }
                var p = i._({
                    "*": "{num} more"
                }, [i.param('num', n, [0])]);
                return (c('React').createElement('span', babelHelpers['extends']({
                    className: 'more'
                }, m), p));
            },
            _setup: function(l) {
                this._controller = new(c('MercuryIndicatorController'))(l.threadID);
                this._subscription = this._controller.subscribe('state-changed', function(m, n) {
                    return this.setState({
                        data: n
                    });
                }.bind(this));
                l.lastMessage && this._controller.setLastMessage(l.lastMessage);
            },
            _destroy: function() {
                this._subscription.unsubscribe();
                this._controller.destroy();
            }
        });
    f.exports = k;
}, null);
__d('MercuryShareAttachmentRenderLocations', [], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        CHAT: 'chat',
        CHAT_PREVIEW: 'chat_preview',
        MESSENGER: 'messenger',
        WEB_INBOX: 'web_inbox',
        PAGES_INBOX: 'pages_inbox',
        getValues: function() {
            return [h.CHAT, h.CHAT_PREVIEW, h.MESSENGER, h.WEB_INBOX, h.PAGES_INBOX];
        },
        isPreview: function(i) {
            return i === h.CHAT_PREVIEW;
        }
    };
    f.exports = h;
}, null);
__d('WebMessengerThreadPermalinks', ['MercuryIDs', 'MessagingTag', 'URI', 'WebMessengerPermalinkConstants', 'WWWBase', 'requireWeak'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        getThreadURI: function(m, n, o) {
            if (c('MercuryIDs').isCanonical(m)) {
                j(m, n, o);
            } else k(m, n, o);
        },
        getThreadURIFromUserID: function(m, n) {
            return i(m, n);
        }
    };

    function i(m, n) {
        var o = new(c('URI'))(c('WWWBase').uri);
        o.setPath(l(n) + '/' + m);
        return o.toString();
    }

    function j(m, n, o) {
        var p = c('MercuryIDs').tokenize(m).value;
        n && n(i(p, o));
    }

    function k(m, n, o) {
        c('requireWeak')('MercuryThreadIDMap', function(p) {
            var q = p.get();
            q.getServerIDFromClientID(m, function(r) {
                var s = new(c('URI'))(c('WWWBase').uri);
                s.setPath(c('WebMessengerPermalinkConstants').getURIPathForThreadID(r, l(o)));
                n && n(s.toString());
            });
        });
    }

    function l(m) {
        var n = c('WebMessengerPermalinkConstants').BASE_PATH;
        if (m && m != c('MessagingTag').INBOX) n += '/' + m;
        return n;
    }
    f.exports = h;
}, null);
__d('MercuryMessageRendererUtils', ['cx', 'invariant', 'HovercardLink', 'MercuryConfig', 'MercuryViewer', 'MessengerTextWithEmoticons.react', 'React'], function a(b, c, d, e, f, g, h, i) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var j = {
        getLinkToParticipant: function(k, l) {
            var m = k.fbid,
                n = c('HovercardLink').constructEndpoint({
                    id: m
                }),
                o = l && l.custom_nickname && l.custom_nickname[m];
            if (o && c('MercuryConfig').MessengerNewEmojiGK) o = c('React').createElement(c('MessengerTextWithEmoticons.react'), {
                renderEmoticons: true,
                renderEmoji: true,
                text: o
            });
            var p = o ? o : k.name;
            if (k.href) return (c('React').createElement('a', {
                className: "_5wzt",
                href: k.href,
                'data-hovercard': n
            }, p));
            return p;
        },
        moveCurrentUserToFront: function() {
            var k = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
            !k ? i(0) : void 0;
            var l = k.indexOf(c('MercuryViewer').getID());
            if (l > 0) {
                var m = k.filter(function(n) {
                    return n !== c('MercuryViewer').getID();
                });
                return [c('MercuryViewer').getID()].concat(m);
            }
            return k;
        }
    };
    f.exports = j;
}, null);
__d('MercuryLogMessageRenderer', ['cx', 'fbt', 'invariant', 'ix', 'Bootloader', 'CSS', 'Image.react', 'MercuryAttachmentViewer', 'MercuryConfig', 'MercuryViewer', 'MercuryLogMessageType', 'MessengerAdminGroupUtils', 'MessengerTextWithEmoticons.react', 'MercuryParticipants', 'React', 'ReactDOM', 'MercuryMessageRendererUtils', 'TextWithEntities.react', 'MercuryThreads', 'TooltipLink.react', 'UserAgent'], function a(b, c, d, e, f, g, h, i, j, k) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var l = c('MercuryThreads').get(),
        m = {
            renderText: function(y, z, aa) {
                switch (y.log_message_type) {
                    case c('MercuryLogMessageType').SUBSCRIBE:
                        z = z || l.getThreadMetaNow(y.thread_id);
                        var ba = y.author;
                        !y.log_message_data ? j(0) : void 0;
                        var ca = y.log_message_data.added_participants;
                        !ca ? j(0) : void 0;
                        var da = ca.length === 1 && ba === ca[0];
                        if (da) {
                            c('Bootloader').loadModules(["MercuryJoinableMessageRenderer"], function(ea) {
                                ea.renderText(y, z, aa);
                            }, 'MercuryLogMessageRenderer');
                        } else p(y, aa);
                        break;
                    case c('MercuryLogMessageType').UNSUBSCRIBE:
                        u(y, aa);
                        break;
                    case c('MercuryLogMessageType').THREAD_NAME:
                        v(y, z, aa);
                        break;
                    case c('MercuryLogMessageType').THREAD_IMAGE:
                        w(y, z, aa);
                        break;
                    case c('MercuryLogMessageType').WALLPAPER:
                        x(y, aa);
                        break;
                    case c('MercuryLogMessageType').GENERIC_ADMIN_TEXT:
                        c('Bootloader').loadModules(["MercuryXMATRenderer"], function(ea) {
                            aa(ea.renderText(y));
                        }, 'MercuryLogMessageRenderer');
                        break;
                    default:
                        c('Bootloader').loadModules(["MercurySpecialLogMessageRenderer"], function(ea) {
                            ea.renderText(y, aa);
                        }, 'MercuryLogMessageRenderer');
                        break;
                }
            },
            renderIcon: function(y) {
                return (c('React').createElement(c('Image.react'), {
                    className: n(y.log_message_type, y.log_message_data),
                    src: k('images/spacer.gif')
                }));
            },
            renderLegacy: function(y, z, aa, ba) {
                n(ba.log_message_type, ba.log_message_data).split(' ').forEach(function(ca) {
                    return ca && c('CSS').addClass(y, ca);
                });
                this.renderText(ba, null, function(ca) {
                    c('ReactDOM').render(c('React').createElement('span', null, ca), z);
                });
                this.renderAttachmentLegacy(aa, ba);
            },
            renderAttachmentLegacy: function(y, z) {
                var aa;
                if (z.log_message_type === c('MercuryLogMessageType').THREAD_IMAGE)(function() {
                    !z.log_message_data ? j(0) : void 0;
                    var ba = z.log_message_data.image;
                    if (ba && ba.preview_url) {
                        c('ReactDOM').render(c('React').createElement(c('Image.react'), {
                            className: "_z6a",
                            onClick: function() {
                                return o(ba);
                            },
                            src: ba.preview_url
                        }), y);
                        c('CSS').show(y);
                    }
                })();
            }
        };
    f.exports = m;

    function n(y, z) {
        var aa = !!(z && z.answered);
        return "_5wzu" + (y === c('MercuryLogMessageType').SUBSCRIBE ? ' ' + "_5wzj" : '') + (y === c('MercuryLogMessageType').UNSUBSCRIBE ? ' ' + "_5wzk" : '') + (y === c('MercuryLogMessageType').THREAD_NAME ? ' ' + "_5wzl" : '') + (y === c('MercuryLogMessageType').THREAD_IMAGE ? ' ' + "_5wzm" : '') + (y === c('MercuryLogMessageType').VIDEO_CALL && aa ? ' ' + "_5wzn" : '') + (y === c('MercuryLogMessageType').VIDEO_CALL && !aa ? ' ' + "_5wzo" : '') + (y === c('MercuryLogMessageType').PHONE_CALL && aa ? ' ' + "_5wzp" : '') + (y === c('MercuryLogMessageType').PHONE_CALL && !aa ? ' ' + "_5wzq" : '') + (y === c('MercuryLogMessageType').SERVER_ERROR ? ' ' + "_5wzr" : '') + (!y ? ' ' + "_2r5l" : '');
    }

    function o(y) {
        c('MercuryAttachmentViewer').bootstrapWithConfig({
            src: y.preview_url,
            endpoint: y.url,
            fbid: y.metadata.fbid,
            dimensions: y.metadata.dimensions,
            disablePaging: true
        }, null);
    }

    function p(y, z) {
        !y.log_message_data ? j(0) : void 0;
        var aa = c('MercuryMessageRendererUtils').moveCurrentUserToFront(y.log_message_data.added_participants);
        !aa ? j(0) : void 0;
        switch (aa.length) {
            case 1:
                q(y, z, aa);
                break;
            case 2:
                r(y, z, aa);
                break;
            case 3:
                s(y, z, aa);
                break;
            default:
                t(y, z, aa);
                break;
        }
    }

    function q(y, z, aa) {
        var ba = [y.author, aa[0]];
        c('MercuryParticipants').getMulti(ba, function(ca) {
            if (y.author === c('MercuryViewer').getID()) {
                z(i._("You added {subscriber1}.", [i.param('subscriber1', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[aa[0]]))]));
            } else if (aa[0] === c('MercuryViewer').getID()) {
                z(i._("{actor} added you.", [i.param('actor', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[y.author]))]));
            } else z(i._("{actor} added {subscriber1}.", [i.param('actor', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[y.author])), i.param('subscriber1', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[aa[0]]))]));
        });
    }

    function r(y, z, aa) {
        var ba = [y.author].concat(aa);
        c('MercuryParticipants').getMulti(ba, function(ca) {
            if (y.author === c('MercuryViewer').getID()) {
                z(i._("You added {subscriber1} and {subscriber2}.", [i.param('subscriber1', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[aa[0]])), i.param('subscriber2', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[aa[1]]))]));
            } else if (aa[0] === c('MercuryViewer').getID()) {
                z(i._("{actor} added you and {subscriber2}.", [i.param('actor', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[y.author])), i.param('subscriber2', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[aa[1]]))]));
            } else z(i._("{actor} added {subscriber1} and {subscriber2}.", [i.param('actor', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[y.author])), i.param('subscriber1', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[aa[0]])), i.param('subscriber2', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[aa[1]]))]));
        });
    }

    function s(y, z, aa) {
        var ba = [y.author].concat(aa);
        c('MercuryParticipants').getMulti(ba, function(ca) {
            if (y.author === c('MercuryViewer').getID()) {
                z(i._("You added {subscriber1}, {subscriber2} and {subscriber3}.", [i.param('subscriber1', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[aa[0]])), i.param('subscriber2', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[aa[1]])), i.param('subscriber3', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[aa[2]]))]));
            } else if (aa[0] === c('MercuryViewer').getID()) {
                z(i._("{actor} added you, {subscriber2} and {subscriber3}.", [i.param('actor', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[y.author])), i.param('subscriber2', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[aa[1]])), i.param('subscriber3', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[aa[2]]))]));
            } else z(i._("{actor} added {subscriber1}, {subscriber2} and {subscriber3}.", [i.param('actor', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[y.author])), i.param('subscriber1', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[aa[0]])), i.param('subscriber2', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[aa[1]])), i.param('subscriber3', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[aa[2]]))]));
        });
    }

    function t(y, z, aa) {
        var ba = [y.author].concat(aa);
        c('MercuryParticipants').getMulti(ba, function(ca) {
            function da(fa) {
                var ga = c('React').createElement('div', null, fa.map(function(ha) {
                    return c('React').createElement('div', null, ha.name);
                }));
                return (c('React').createElement(c('TooltipLink.react'), {
                    alignH: 'center',
                    position: 'above',
                    tooltip: ga
                }, i._({
                    "*": "{num} more"
                }, [i.param('num', fa.length, [0])])));
            }
            var ea = aa.map(function(fa) {
                return ca[fa];
            });
            if (y.author === c('MercuryViewer').getID()) {
                z(i._("You added {subscriber1}, {subscriber2} and {more_people}.", [i.param('subscriber1', c('MercuryMessageRendererUtils').getLinkToParticipant(ea[0])), i.param('subscriber2', c('MercuryMessageRendererUtils').getLinkToParticipant(ea[1])), i.param('more_people', da(ea.slice(2)))]));
            } else if (aa[0] === c('MercuryViewer').getID()) {
                z(i._("{actor} added you, {subscriber2} and {more_people}.", [i.param('actor', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[y.author])), i.param('subscriber2', c('MercuryMessageRendererUtils').getLinkToParticipant(ea[1])), i.param('more_people', da(ea.slice(2)))]));
            } else z(i._("{actor} added {subscriber1}, {subscriber2} and {more_people}.", [i.param('actor', c('MercuryMessageRendererUtils').getLinkToParticipant(ca[y.author])), i.param('subscriber1', c('MercuryMessageRendererUtils').getLinkToParticipant(ea[0])), i.param('subscriber2', c('MercuryMessageRendererUtils').getLinkToParticipant(ea[1])), i.param('more_people', da(ea.slice(2)))]));
        });
    }

    function u(y, z) {
        var aa = [y.author];
        !y.log_message_data ? j(0) : void 0;
        var ba = y.log_message_data.removed_participants;
        !ba ? j(0) : void 0;
        var ca = void 0;
        if (ba.length === 1) {
            ca = ba[0];
            aa.push(ca);
        }
        c('MercuryParticipants').getMulti(aa, function(da) {
            var ea = da[y.author],
                fa = da[ca];
            if (y.author === c('MercuryViewer').getID()) {
                if (!ca || ca === y.author) {
                    z(i._("You left the conversation."));
                } else z(i._("You removed {name} from the conversation.", [i.param('name', c('MercuryMessageRendererUtils').getLinkToParticipant(fa))]));
            } else if (!ca || ca === y.author) {
                z(i._("{actor} left the conversation.", [i.param('actor', c('MercuryMessageRendererUtils').getLinkToParticipant(ea))]));
            } else if (ca === c('MercuryViewer').getID()) {
                z(i._("{actor} removed you from the conversation.", [i.param('actor', c('MercuryMessageRendererUtils').getLinkToParticipant(ea))]));
            } else z(i._("{actor} removed {name} from the conversation.", [i.param('actor', c('MercuryMessageRendererUtils').getLinkToParticipant(ea)), i.param('name', c('MercuryMessageRendererUtils').getLinkToParticipant(fa))]));
        });
    }

    function v(y, z, aa) {
        !y.log_message_data ? j(0) : void 0;
        var ba = y.log_message_data.name,
            ca = "_5wzs" + (c('UserAgent').isBrowser('Chrome') ? ' ' + "_4fbd" : '');
        if (y.author === c('MercuryViewer').getID()) {
            if (ba) {
                var da = c('React').createElement(c('TextWithEntities.react'), {
                    renderEmoticons: true,
                    renderEmoji: true,
                    text: ba
                });
                if (c('MercuryConfig').MessengerNewEmojiGK) da = c('React').createElement(c('MessengerTextWithEmoticons.react'), {
                    renderEmoticons: true,
                    renderEmoji: true,
                    text: ba
                });
                aa(i._("You named the conversation: {name}.", [i.param('name', c('React').createElement('span', {
                    className: ca
                }, da))]));
            } else aa(i._("You removed the conversation name."));
        } else c('MercuryParticipants').get(y.author, function(ea) {
            var fa = c('MercuryMessageRendererUtils').getLinkToParticipant(ea, z);
            if (ba) {
                var ga = c('React').createElement(c('TextWithEntities.react'), {
                    renderEmoticons: true,
                    renderEmoji: true,
                    text: ba
                });
                if (c('MercuryConfig').MessengerNewEmojiGK) ga = c('React').createElement(c('MessengerTextWithEmoticons.react'), {
                    renderEmoticons: true,
                    renderEmoji: true,
                    text: ba
                });
                aa(i._("{actor} named the conversation: {name}.", [i.param('actor', fa), i.param('name', c('React').createElement('span', {
                    className: ca
                }, ga))]));
            } else aa(i._("{actor} removed the conversation name.", [i.param('actor', fa)]));
        });
    }

    function w(y, z, aa) {
        if (y.author === c('MercuryViewer').getID()) {
            !y.log_message_data ? j(0) : void 0;
            if (y.log_message_data.image) {
                aa(i._("You changed the conversation picture."));
            } else aa(i._("You removed the conversation picture."));
        } else c('MercuryParticipants').get(y.author, function(ba) {
            var ca = c('MercuryMessageRendererUtils').getLinkToParticipant(ba, z);
            !y.log_message_data ? j(0) : void 0;
            if (y.log_message_data.image) {
                aa(i._("{actor} changed the conversation picture.", [i.param('actor', ca)]));
            } else aa(i._("{actor} removed the conversation picture.", [i.param('actor', ca)]));
        });
    }

    function x(y, z) {
        if (y.author === c('MercuryViewer').getID()) {
            z(i._("You changed the wallpaper."));
        } else c('MercuryParticipants').get(y.author, function(aa) {
            var ba = c('MercuryMessageRendererUtils').getLinkToParticipant(aa);
            z(i._("{actor} changed the wallpaper.", [i.param('actor', ba)]));
        });
    }
}, null);
__d('MercuryMeMessageProcessor', ['ImmutableObject', 'MercuryActionType', 'MercuryConfig', 'MercuryIDs', 'MercuryLogMessageType', 'MercuryParticipants', 'MercuryCommands'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h(l) {
        if (!l) return false;
        if (l.action_type !== c('MercuryActionType').USER_GENERATED_MESSAGE) return false;
        var m = l.body;
        return i(m);
    }

    function i(l) {
        if (!c('MercuryConfig').MessengerRenderMeAsAdminMessageGK) return false;
        if (typeof l === 'string' && l.startsWith(c('MercuryCommands').ME)) return true;
        return false;
    }

    function j(l, m, n, o) {
        c('MercuryParticipants').get(m, function(p) {
            o(k(l, p, n));
        });
    }

    function k(l, m, n) {
        var o = c('MercuryIDs').getUserIDFromParticipantID(m.id),
            p = n.custom_nickname && n.custom_nickname[o];
        p = p ? p : m.short_name;
        return l.replace(c('MercuryCommands').ME, p + ' ').replace(/\n+\s*\n+/g, '\n');
    }
    f.exports = {
        transformSnippet: j,
        transformSnippetNow: k,
        shouldTransform: h,
        shouldTransformSnippet: i
    };
}, null);
__d('MercurySheetPolicy', ['keyMirror'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = {
            ChatThreadIsMutedTabSheet: {
                isPermanent: false,
                isSheetWithInput: false
            },
            ChatUserFocusSheet: {
                isPermanent: true,
                isSheetWithInput: true
            },
            ChatUserFocusBypassSheet: {
                isPermanent: true,
                isSheetWithInput: true
            },
            ChatUserTimezoneSheet: {
                isPermanent: true,
                isSheetWithInput: true
            },
            ChatUserBlockedTabSheet: {
                isPermanent: true,
                isSheetWithInput: false
            },
            ChatUploadWarningTabSheet: {
                isPermanent: false,
                isSheetWithInput: false
            },
            ChatThreadSecretModeSheet: {
                isPermanent: true,
                isSheetWithInput: false
            },
            ChatThreadIsMessageBlockedSheet: {
                isPermanent: true,
                isSheetWithInput: false
            },
            ChatReadOnlyTabSheet: {
                isPermanent: false,
                isSheetWithInput: false
            },
            ChatReadOnlyPermanentTabSheet: {
                isPermanent: true,
                isSheetWithInput: false
            },
            ChatOfflineTabSheet: {
                isPermanent: true,
                isSheetWithInput: false
            },
            ChatNoRecipientsTabSheet: {
                isPermanent: true,
                isSheetWithInput: false
            },
            ChatNewMessagesTabSheet: {
                isPermanent: true,
                isSheetWithInput: true
            },
            ChatNameConversationTabSheet: {
                isPermanent: true,
                isSheetWithInput: true
            },
            ChatEmployeeAwaySheet: {
                isPermanent: true,
                isSheetWithInput: false
            },
            ChatPageResponsivenessIndicator: {
                isPermanent: true,
                isSheetWithInput: false
            },
            ChatEventReminderTabSheet: {
                isPermanent: true,
                isSheetWithInput: false
            }
        },
        i = {
            canReplaceOpenSheet: function(j, k) {
                var l = this.getType(k),
                    m = this.isPermanent(k),
                    n = this.isSheetWithInput(k),
                    o = this.getType(j),
                    p = this.isPermanent(j),
                    q = this.isSheetWithInput(j);
                if (q) return !!(l !== o && n);
                if (p && !m) return false;
                if (o === this.sheets.ChatThreadIsMessageBlockedSheet) return false;
                return true;
            },
            getType: function(j) {
                var k = j.getType || j.type && j.type.getType || function() {
                        return j;
                    },
                    l = k.call(j);
                return l;
            },
            isPermanent: function(j) {
                if (typeof j === 'string' && h[j]) return h[j].isPermanent;
                var k = j.isPermanent || j.type && j.type.isPermanent || function() {
                        return false;
                    },
                    l = k.call(j);
                return l;
            },
            isSheetWithInput: function(j) {
                if (typeof j === 'string' && h[j]) return h[j].isSheetWithInput;
                var k = j.isSheetWithInput || j.type && j.type.isSheetWithInput || function() {
                        return false;
                    },
                    l = k.call(j);
                return l;
            },
            sheets: c('keyMirror')(h)
        };
    f.exports = i;
}, null);
__d('MercuryMessageGroup', ['MercuryActionType', 'MercuryAttachmentType', 'MercuryMeMessageProcessor', 'MercuryShareAttachmentRenderLocations', 'MercuryThreadlistConstants', 'enumerate'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        calculateMessageGroups: function(k, l) {
            var m = [],
                n = null,
                o = {
                    value: null
                },
                p = c('enumerate')(k),
                q = void 0;
            while (!(q = p.next()).done) {
                var r = h.canAppendMessageToLastGroup(o.value, q.value, l);
                if (!r) {
                    n = [];
                    m.push(n);
                }
                n.push(q.value);
                o = q;
            }
            return m;
        },
        canAppendMessageToLastGroup: function(k, l, m) {
            var n = c('MercuryThreadlistConstants').GROUPING_THRESHOLD;
            if (!k || i(k, m) || i(l, m) || k.author != l.author || k.timestamp < l.timestamp - n || k.is_spoof_warning !== l.is_spoof_warning || k.page_admin_notes) return false;
            return true;
        }
    };

    function i(k, l) {
        var m = k.has_attachment;
        if (m && (l === c('MercuryShareAttachmentRenderLocations').MESSENGER || l === c('MercuryShareAttachmentRenderLocations').CHAT)) m = j(k);
        return !!(k.action_type == c('MercuryActionType').LOG_MESSAGE || c('MercuryMeMessageProcessor').shouldTransform(k) || m || k.forward_count || k.html_body || k.body && k.body.length > c('MercuryThreadlistConstants').MAX_CHARS_BEFORE_BREAK);
    }

    function j(k) {
        var l = k.attachments[0];
        return (!l || l.attach_type === c('MercuryAttachmentType').STICKER || l.attach_type === c('MercuryAttachmentType').ANIMATED_IMAGE);
    }
    f.exports = h;
}, null);
__d('getPageIDFromThreadID', ['FBID', 'MercuryIDs'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h(i) {
        var j = c('MercuryIDs').getUserIDFromThreadID(i);
        if (!j || c('FBID').isUser(j)) return null;
        return j;
    }
    f.exports = h;
}, null);
__d('shouldAddMRefParam', ['URI', 'isFacebookURI'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = function(i) {
        if (!c('isFacebookURI')(i) || i.getFragment()) return false;
        if (/^\/safetycheck\//.test(i.getPath())) return false;
        return true;
    };
    f.exports = h;
}, null);
__d('MessagingFlowerCornerArrangements', ['invariant', 'ix', 'Random', 'randomShuffle'], function a(b, c, d, e, f, g, h, i) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var j = {
            TOP_LEFT: 'topLeft',
            BOTTOM_RIGHT: 'bottomRight'
        },
        k = {
            PINK: 'pink',
            PURPLE: 'purple',
            YELLOW: 'yellow'
        },
        l = {
            ROUND: 'round',
            POINTY: 'pointy'
        },
        m = -10;

    function n(r, s) {
        this.$ElementProducer1 = r;
        this.$ElementProducer4 = s;
        this.$ElementProducer2 = c('Random').random() < .5;
        this.$ElementProducer3 = [];
        var t = [k.PINK, k.PURPLE, k.YELLOW],
            u = [l.ROUND, l.POINTY, c('Random').random() >= .5 ? l.ROUND : l.POINTY];
        c('randomShuffle')(t);
        c('randomShuffle')(u);
        for (var v = 0; v < 3; v++) this.$ElementProducer3.push(this.$ElementProducer5(t[v], u[v]));
    }
    n.prototype.$ElementProducer6 = function(r) {
        switch (r) {
            case k.PINK:
                return i('/images/messaging/flowerborder/pinkPointyFlower.png');
            case k.PURPLE:
                return i('/images/messaging/flowerborder/purplePointyFlower.png');
            case k.YELLOW:
            default:
                return i('/images/messaging/flowerborder/yellowPointyFlower.png');
        }
    };
    n.prototype.$ElementProducer7 = function(r) {
        switch (r) {
            case k.PINK:
                return i('/images/messaging/flowerborder/pinkRoundFlower.png');
            case k.PURPLE:
                return i('/images/messaging/flowerborder/purpleRoundFlower.png');
            case k.YELLOW:
            default:
                return i('/images/messaging/flowerborder/yellowRoundFlower.png');
        }
    };
    n.prototype.$ElementProducer5 = function(r, s) {
        return s === l.POINTY ? this.$ElementProducer6(r) : this.$ElementProducer7(r);
    };
    n.prototype.$ElementProducer8 = function() {
        return this.$ElementProducer3.pop();
    };
    n.prototype.flower = function(r) {
        var s = c('Random').random() * 360;
        return this.$ElementProducer9(this.$ElementProducer8(), {
            pivot: .5,
            rotationStart: s + r.rotationStartOffset,
            rotationEnd: s,
            scale: r.scale,
            x: r.x,
            y: r.y
        });
    };
    n.prototype.leaf = function(r) {
        return this.$ElementProducer9(i('images/messaging/flowerborder/leaf.png'), {
            pivot: 1,
            rotationStart: 0,
            rotationEnd: r.rotationEnd,
            scale: r.scale,
            x: r.x,
            y: r.y
        });
    };
    n.prototype.$ElementProducer9 = function(r, s) {
        var t = s.pivot * 100 + '%',
            u = s.x + m,
            v = s.y + m,
            w = -s.pivot * 100,
            x = s.scale,
            y = s.rotationEnd,
            z = void 0,
            aa = void 0,
            ba = void 0,
            ca = void 0;
        if (this.$ElementProducer2) {
            var da = u;
            u = v;
            v = da;
            y = -y;
        }
        if (this.$ElementProducer1 === j.BOTTOM_RIGHT) {
            ca = this.$ElementProducer4 + u + 'px';
            aa = this.$ElementProducer4 + v + 'px';
            w = 100 + w;
            y += 180;
        } else if (this.$ElementProducer1 === j.TOP_LEFT) {
            ba = this.$ElementProducer4 + u + 'px';
            z = this.$ElementProducer4 + v + 'px';
        } else h(0);
        var ea = [];
        if (w !== 0) ea.push('translate(' + w + '%, ' + w + '%)');
        ea.push('scale(' + x + ')');
        if (y !== 0) ea.push('rotate(' + y + 'deg)');
        return {
            style: {
                bottom: aa,
                left: ba,
                position: 'absolute',
                right: ca,
                top: z,
                transform: ea.join(' '),
                transformOrigin: t + ' ' + t
            },
            image: r
        };
    };

    function o(r) {
        return [r.leaf({
            x: 20.5,
            y: 38,
            scale: .225,
            rotationEnd: -80
        }), r.leaf({
            x: 29,
            y: 22.5,
            scale: .35,
            rotationEnd: 35
        }), r.flower({
            x: 31.5,
            y: 22,
            scale: .6,
            rotationStartOffset: -70
        }), r.flower({
            x: 21,
            y: 35,
            scale: .65,
            rotationStartOffset: -70
        }), r.flower({
            x: 21.75,
            y: 24.75,
            scale: 1,
            rotationStartOffset: 50
        })];
    }

    function p(r) {
        return [r.leaf({
            x: 22.25,
            y: 35.25,
            scale: .225,
            rotationEnd: -115
        }), r.leaf({
            x: 35,
            y: 24,
            scale: .35,
            rotationEnd: 110
        }), r.flower({
            x: 21.5,
            y: 32.5,
            scale: .68,
            rotationStartOffset: -60
        }), r.flower({
            x: 21.5,
            y: 23.5,
            scale: .67,
            rotationStartOffset: -70
        }), r.flower({
            x: 31,
            y: 21,
            scale: .95,
            rotationStartOffset: 50
        })];
    }

    function q(r, s) {
        var t = new n(r, s);
        return c('Random').random() < .5 ? o(t) : p(t);
    }
    f.exports = {
        createFlowers: q,
        corners: j
    };
}, null);
__d('MessagingFlowerBorder.react', ['Image.react', 'MessagingFlowerCornerArrangements', 'ReactComponentWithPureRenderMixin', 'React'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').PropTypes,
        i = c('React').createClass({
            displayName: 'MessagingFlowerBorder',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                ChildClass: h.number
            },
            getDefaultProps: function() {
                return {
                    offset: 0
                };
            },
            getInitialState: function() {
                return {
                    elements: this._createElements()
                };
            },
            _createElements: function() {
                return c('MessagingFlowerCornerArrangements').createFlowers(c('MessagingFlowerCornerArrangements').corners.TOP_LEFT, this.props.offset).concat(c('MessagingFlowerCornerArrangements').createFlowers(c('MessagingFlowerCornerArrangements').corners.BOTTOM_RIGHT, this.props.offset));
            },
            render: function() {
                return (c('React').createElement('div', null, this.state.elements.map(function(j, k) {
                    return c('React').createElement(c('Image.react'), {
                        key: k,
                        style: j.style,
                        src: j.image
                    });
                })));
            }
        });
    f.exports = i;
}, null);
__d('MessagingGiftWrap.react', ['cx', 'CurrentEnvironment', 'ReactComponentWithPureRenderMixin', 'React', 'emptyFunction'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'MessagingGiftWrap',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                isSticker: i.bool,
                onUnwrap: i.func
            },
            getDefaultProps: function() {
                return {
                    onUnwrap: c('emptyFunction')
                };
            },
            getInitialState: function() {
                return {
                    unwrapped: false
                };
            },
            render: function() {
                var k = c('CurrentEnvironment').messengerdotcom;
                return (c('React').createElement('div', {
                    className: "_4p0m" + (this.state.unwrapped ? ' ' + "_4p0o" : '') + (k ? ' ' + "_mxz" : '') + (k ? ' ' + "_4br2" : '') + (!k ? ' ' + "_3_om" : '') + (this.props.isSticker ? ' ' + "_52vq" : ''),
                    onClick: this._handleClick
                }, c('React').createElement('div', {
                    className: "_4p0r"
                }), c('React').createElement('div', {
                    className: "_4p0s _4p0t"
                }), c('React').createElement('div', {
                    className: "_4p0s _4p0u"
                })));
            },
            _handleClick: function(k) {
                k.stopPropagation();
                this.setState({
                    unwrapped: true
                });
                this.props.onUnwrap && this.props.onUnwrap();
            }
        });
    f.exports = j;
}, null);
__d('EmployeeLinkRanges', ['EmployeeLinkMatcher'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        PHABRICATOR_PREFIX: 'https://phabricator.intern.facebook.com/',
        TASKS_PREFIX: 'https://our.intern.facebook.com/intern/tasks/?t=',
        BUSINESS_PREFIX: 'https://our.intern.facebook.com/intern/business/?q=',
        get: function(i) {
            var j = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1],
                k = i.substr(j),
                l = c('EmployeeLinkMatcher').match(k);
            if (!l) return [];
            var m = l.lnk;
            j += l.idx;
            var n = '';
            switch (m[0].toLowerCase()) {
                case 'd':
                case 'p':
                    n = this.PHABRICATOR_PREFIX + m.toUpperCase();
                    break;
                case 't':
                    n = this.TASKS_PREFIX + m.substr(1);
                    break;
                case 'b':
                    n = this.BUSINESS_PREFIX + m.substr(1);
                    break;
                default:
                    return [];
            }
            var o = m.length,
                p = [{
                    offset: j,
                    length: o,
                    entity: {
                        url: n
                    }
                }];
            return p.concat(this.get(i, j + o));
        }
    };
    f.exports = h;
}, null);
__d('P2PActions', ['ChatOpenTab', 'P2PActionConstants', 'P2PDispatcher', 'MercuryShareAttachmentRenderLocations', 'ifRequired'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        updateCreditCards: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CREDIT_CARDS_UPDATED,
                data: i
            });
        },
        updateCreditCardsError: function() {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CREDIT_CARDS_UPDATED_ERROR
            });
        },
        updatePaymentMethods: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PAYMENT_METHODS_UPDATED,
                data: i
            });
        },
        updatePaymentMethodsError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PAYMENT_METHODS_UPDATED_ERROR,
                data: i
            });
        },
        ignoreCreditCardChannelEvents: function() {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHANNEL_EVENTS_IGNORED
            });
        },
        allowCreditCardChannelEvents: function() {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHANNEL_EVENTS_ALLOWED
            });
        },
        creditCardSaving: function() {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CREDIT_CARD_SAVING
            });
        },
        addCreditCard: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CREDIT_CARD_ADDED,
                data: i
            });
        },
        addCreditCardError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CREDIT_CARD_ADDED_ERROR,
                data: i
            });
        },
        addCreditCardErrorCleared: function() {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CREDIT_CARD_ADDED_ERROR_CLEARED
            });
        },
        updatePresetCreditCard: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PRESET_CREDIT_CARD_UPDATED,
                data: i
            });
        },
        updatePresetCreditCardError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PRESET_CREDIT_CARD_UPDATED_ERROR,
                data: i
            });
        },
        updateCreditCard: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CREDIT_CARD_UPDATED,
                data: i
            });
        },
        updateCreditCardError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CREDIT_CARD_UPDATED_ERROR,
                data: i
            });
        },
        deleteCreditCard: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CREDIT_CARD_DELETED,
                data: i
            });
        },
        deleteCreditCardError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CREDIT_CARD_DELETED_ERROR,
                data: i
            });
        },
        verifyCreditCard: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CREDIT_CARD_VERIFIED,
                data: i
            });
        },
        verifyCreditCardError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CREDIT_CARD_VERIFIED_ERROR,
                data: i
            });
        },
        updateTransfers: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').TRANSFERS_UPDATED,
                data: i
            });
        },
        updateTransfersError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').TRANSFERS_UPDATED_ERROR,
                data: i
            });
        },
        updateNUXTransfers: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').NUX_TRANSFERS_UPDATED,
                data: i
            });
        },
        transferAdded: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').TRANSFER_ADDED,
                data: i
            });
        },
        transferAddedError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').TRANSFER_ADDED_ERROR,
                data: i
            });
        },
        transferUpdated: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').TRANSFER_UPDATED,
                data: i
            });
        },
        transferUpdatedError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').TRANSFER_UPDATED_ERROR,
                data: i
            });
        },
        transferAccepted: function() {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').TRANSFER_ACCEPTED
            });
        },
        transferDeclined: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').TRANSFER_DECLINED,
                data: i
            });
        },
        chatSendViewOpened: function(i) {
            function j() {
                c('P2PDispatcher').dispatch({
                    type: c('P2PActionConstants').CHAT_SEND_VIEW_OPENED,
                    data: i
                });
            }
            if (i.referrer === c('MercuryShareAttachmentRenderLocations').WEB_INBOX) {
                j();
            } else if (c('ChatOpenTab').canOpenTab()) {
                c('ChatOpenTab').openThread(i.threadID, null, null, j);
            } else {
                c('ifRequired')('MessengerActions', function(k) {
                    return k.selectThread(i.threadID);
                });
                j();
            }
        },
        chatSendViewClosed: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHAT_SEND_VIEW_CLOSED,
                data: i
            });
        },
        binNumberValidated: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').BIN_NUMBER_VALIDATED,
                data: i
            });
        },
        binNumberValidatedError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').BIN_NUMBER_VALIDATED_ERROR,
                data: i
            });
        },
        friendsListUpdated: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').FRIENDS_LIST_UPDATED,
                data: i
            });
        },
        userEligibilityUpdated: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').USER_ELIGIBILITY_UDPATED,
                data: i
            });
        },
        showDialog: function(i, j) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').DIALOG_SHOWN,
                data: {
                    dialogClass: i,
                    dialogProps: j
                }
            });
        },
        hideDialog: function() {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').DIALOG_CLOSED
            });
        },
        bannerStatesUpdated: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').BANNER_STATES_UPDATED,
                data: i
            });
        },
        bannerDismissed: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').BANNER_DISMISSED,
                data: i
            });
        },
        bannerCompleted: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').BANNER_COMPLETED,
                data: i
            });
        },
        moneypennyTransferCreated: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').MONEYPENNY_TRANSFER_CREATED,
                data: i
            });
        },
        moneypennyTransferCreatedError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').MONEYPENNY_TRANSFER_CREATED_ERROR,
                data: i
            });
        },
        addPlatformContext: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PLATFORM_CONTEXT_ADDED,
                data: i
            });
        },
        addPlatformContextError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PLATFORM_CONTEXT_ADDED_ERROR,
                data: i
            });
        },
        clearPlatformContextSaveErrors: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PLATFORM_CONTEXT_SAVE_ERRORS_CLEARED,
                data: i
            });
        },
        platformContextBannerDismissed: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PLATFORM_CONTEXT_BANNER_DISMISSED,
                data: i
            });
        },
        platformContextProductItemSold: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PLATFORM_CONTEXT_PRODUCT_ITEM_SOLD,
                data: i
            });
        },
        platformContextChanged: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PLATFORM_CONTEXT_CHANGED,
                data: i
            });
        },
        extensiveTransferDetailsLoaded: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').EXTENSIVE_TRANSFER_DETAILS_UPDATED,
                data: i
            });
        },
        updateAddresses: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').ADDRESSES_UPDATED,
                data: i
            });
        },
        addressSaving: function() {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').ADDRESS_SAVING
            });
        },
        addAddress: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').ADDRESS_ADDED,
                data: i
            });
        },
        addAddressError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').ADDRESS_ADDED_ERROR,
                data: i
            });
        },
        addAddressErrorCleared: function() {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').ADDRESS_ADDED_ERROR_CLEARED
            });
        },
        checkoutCartInitiated: function() {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_CART_INITIATED
            });
        },
        checkoutCartCreated: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_CART_CREATED,
                data: i
            });
        },
        checkoutShippingOptionSelected: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_SHIPPING_OPTION_SELECTED,
                data: i
            });
        },
        checkoutAddressSelected: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_ADDRESS_SELECTED,
                data: i
            });
        },
        checkoutCreditCardSelected: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_CREDIT_CARD_SELECTED,
                data: i
            });
        },
        checkoutAddressFormToggled: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_ADDRESS_FORM_TOGGLED,
                data: i
            });
        },
        checkoutCreditCardFormToggled: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_CREDIT_CARD_FORM_TOGGLED,
                data: i
            });
        },
        checkoutAddressEditOptionsToggled: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_ADDRESS_EDIT_OPTIONS_TOGGLED,
                data: i
            });
        },
        checkoutCreditCardEditOptionsToggled: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_CREDIT_CARD_EDIT_OPTIONS_TOGGLED,
                data: i
            });
        },
        checkoutPaymentMethodEditOptionsToggled: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_PAYMENT_METHOD_EDIT_OPTIONS_TOGGLED,
                data: i
            });
        },
        checkoutPaymentMethodSelected: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_PAYMENT_METHOD_SELECTED,
                data: i
            });
        },
        checkoutPaymentMethodConfigured: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_PAYMENT_METHOD_CONFIGURED,
                data: i
            });
        },
        checkoutPaymentMethodConfirmed: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_PAYMENT_METHOD_CONFIRMED,
                data: i
            });
        },
        checkoutCreditCardFormValidated: function(i, j) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_CREDIT_CARD_FORM_VALIDATED,
                data: {
                    isValid: i,
                    formData: j
                }
            });
        },
        checkoutAddressFormValidated: function(i, j) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_ADDRESS_FORM_VALIDATED,
                data: {
                    isValid: i,
                    formData: j
                }
            });
        },
        checkoutEditCompleted: function() {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_EDIT_COMPLETED
            });
        },
        checkoutProcessing: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_PROCESSING,
                data: i
            });
        },
        checkoutBuyerProfileUpdated: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_BUYER_PROFILE_UPDATED,
                data: i
            });
        },
        checkoutManualPaymentReceiptUpdated: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').CHECKOUT_MANUAL_PAYMENT_RECEIPT_UPDATED,
                data: i
            });
        },
        paymentRequestInitiated: function() {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PAYMENT_REQUEST_INITIATED
            });
        },
        paymentRequestInitiatedComplete: function() {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PAYMENT_REQUEST_INITIATED_COMPLETE
            });
        },
        paymentRequestCreated: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PAYMENT_REQUEST_CREATED,
                data: i
            });
        },
        paymentRequestCreatedError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PAYMENT_REQUEST_CREATED_ERROR,
                data: i
            });
        },
        paymentRequestUpdated: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PAYMENT_REQUEST_UPDATED,
                data: i
            });
        },
        paymentRequestDeclineInitiated: function() {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PAYMENT_REQUEST_DECLINE_INITIATED
            });
        },
        paymentRequestDeclined: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PAYMENT_REQUEST_DECLINED,
                data: i
            });
        },
        paymentRequestDeclineError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PAYMENT_REQUEST_DECLINE_ERROR,
                data: i
            });
        },
        paymentRequestCancelInitiated: function() {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PAYMENT_REQUEST_CANCEL_INITIATED
            });
        },
        paymentRequestCanceled: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PAYMENT_REQUEST_CANCELED,
                data: i
            });
        },
        paymentRequestCancelError: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PAYMENT_REQUEST_CANCEL_ERROR,
                data: i
            });
        },
        paymentRequestsFetched: function(i) {
            c('P2PDispatcher').dispatch({
                type: c('P2PActionConstants').PAYMENT_REQUESTS_FETCHED,
                data: i
            });
        }
    };
    f.exports = h;
}, null);
__d('P2PLoadingMask.react', ['cx', 'React', 'XUISpinner.react'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'P2PLoadingMask',
            propTypes: {
                visible: i.bool
            },
            getDefaultProps: function() {
                return {
                    visible: false
                };
            },
            render: function() {
                if (!this.props.visible) return null;
                return (c('React').createElement('div', {
                    className: "_3de"
                }, c('React').createElement(c('XUISpinner.react'), {
                    background: 'dark',
                    size: 'large',
                    className: "_3df"
                }), c('React').createElement('div', {
                    className: "_3dg"
                })));
            }
        });
    f.exports = j;
}, null);
__d('P2PAbstractSendMoneyButton.react', ['cx', 'fbt', 'React', 'TooltipLink.react', 'joinClasses'], function a(b, c, d, e, f, g, h, i) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = c('React').createClass({
            displayName: 'P2PAbstractSendMoneyButton',
            propTypes: {
                button: j.object,
                isActive: j.bool.isRequired,
                isDisabled: j.bool,
                isMessenger: j.bool.isRequired,
                onClick: j.func.isRequired,
                onMouseOver: j.func,
                recipientName: j.string
            },
            _clickGuard: false,
            render: function() {
                return (c('React').createElement(c('TooltipLink.react'), {
                    alignH: 'center',
                    className: c('joinClasses')(this.props.className, (this.props.isActive ? "open" : '') + (this.props.isDisabled ? ' ' + "disabled" : '') + (this.props.isActive ? ' ' + "_10gz" : '') + (this.props.isDisabled ? ' ' + "_10g-" : '') + (!this.props.isMessenger && !this.props.className ? ' ' + "_5uqy" : '') + (this.props.isMessenger ? ' ' + "_3ggc" : '')),
                    href: '#',
                    onClick: this._handleClick,
                    onMouseDown: this._prepareForClick,
                    onMouseOver: this.props.onMouseOver,
                    position: 'above',
                    role: 'button',
                    title: this._getLinkTitle()
                }, this.getButton()));
            },
            getButton: function() {
                if (this.props.button) return this.props.button;
                return c('React').createElement('i', {
                    className: "_5s8l"
                });
            },
            _getLinkTitle: function() {
                if (this.props.isDisabled) return null;
                return i._("Send Money");
            },
            _prepareForClick: function() {
                this.props.onMouseDown && this.props.onMouseDown();
                this._clickGuard = this.props.isActive;
            },
            _handleClick: function(l) {
                l.stopPropagation();
                if (this._clickGuard) {
                    this._clickGuard = false;
                    return;
                }
                this.props.onClick();
            }
        });
    f.exports = k;
}, null);
__d('P2PLogger', ['BanzaiLogger'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = 'P2PPaymentLoggerConfig',
        i = {
            log: function(j, k) {
                k = babelHelpers['extends']({
                    event: j
                }, k);
                c('BanzaiLogger').log(h, k);
            }
        };
    f.exports = i;
}, null);
__d('P2PSendMoneyContainerBootloader.react', ['cx', 'Bootloader', 'CurrentEnvironment', 'DeferredComponent.react', 'MercuryIDs', 'P2PAbstractSendMoneyButton.react', 'P2PActions', 'P2PLoadingMask.react', 'P2PLogger', 'P2PPaymentLoggerEvent', 'P2PPaymentLoggerEventFlow', 'P2PSendMoneyDialogStore', 'React', 'ReactLayeredComponentMixin_DEPRECATED', 'Run', 'XUIContextualDialog.react', 'emptyFunction', 'getPageIDFromThreadID'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('CurrentEnvironment').messengerdotcom,
        k = j ? 282 : 260,
        l = c('React').createClass({
            displayName: 'P2PSendMoneyContainerBootloader',
            propTypes: {
                button: i.node,
                className: i.string,
                ContextualDialog: i.func,
                flyoutAlignment: i.string,
                onTrigger: i.func,
                participantIDs: i.array,
                referrer: i.string,
                threadID: i.string
            },
            getInitialState: function() {
                return {
                    showPlaceholderDialog: false,
                    shouldBootloadImmediately: c('P2PSendMoneyDialogStore').isAnyChatSendViewOpen()
                };
            },
            mixins: [c('ReactLayeredComponentMixin_DEPRECATED')],
            _clicked: false,
            _onComponentLoad: c('emptyFunction'),
            _bootloadCalled: false,
            _sendMoneyDialogStoreSub: null,
            log: function(m, n) {
                c('P2PLogger').log(m, babelHelpers['extends']({
                    www_event_referrer: this.props.referrer,
                    www_event_flow: c('P2PPaymentLoggerEventFlow').UI_FLOW_P2P_SEND
                }, n));
            },
            componentWillMount: function() {
                if (this.state.shouldBootloadImmediately) {
                    this._bootloadComponentNow();
                } else this._sendMoneyDialogStoreSub = c('P2PSendMoneyDialogStore').addListener('change', this.onDialogStoreChange);
            },
            componentWillUnmount: function() {
                this.removeDialogStoreSub();
            },
            onDialogStoreChange: function() {
                this._bootloadComponentNow();
                this.removeDialogStoreSub();
            },
            removeDialogStoreSub: function() {
                if (this._sendMoneyDialogStoreSub) {
                    this._sendMoneyDialogStoreSub.remove();
                    this._sendMoneyDialogStoreSub = null;
                }
            },
            onPlaceholderClick: function() {
                var m = this.props.threadID ? c('MercuryIDs').tokenize(this.props.threadID).value : null;
                this._handleDialogVisibility(!this.state.showPlaceholderDialog);
                this.log(c('P2PPaymentLoggerEvent').UI_ACTN_SEND_MONEY_BUTTON_PLACEHOLDER_CLICKED, {
                    object_id: m
                });
                this._bootloadComponentNow();
                this._clicked = false;
            },
            _handleDialogVisibility: function(m) {
                if (!m) {
                    c('P2PActions').chatSendViewClosed({
                        threadID: this.props.threadID
                    });
                } else c('P2PActions').chatSendViewOpened({
                    referrer: this.props.referrer,
                    threadID: this.props.threadID
                });
                this.setState({
                    showPlaceholderDialog: m
                });
            },
            renderLayers: function() {
                var m = {};
                if (this.state.showPlaceholderDialog) {
                    var n = this.props.ContextualDialog || c('XUIContextualDialog.react');
                    m.placeholderDialog = c('React').createElement(n, {
                        alignment: this.props.flyoutAlignment ? this.props.flyoutAlignment : j ? 'right' : 'left',
                        contextRef: function() {
                            return this.refs.placeholderButton;
                        }.bind(this),
                        onBlur: function() {
                            if (!this._clicked) this._handleDialogVisibility(false);
                            this._clicked = false;
                        }.bind(this),
                        ref: 'dialog',
                        shown: true,
                        width: k,
                        position: 'above'
                    }, c('React').createElement('div', {
                        className: "_c_5"
                    }, c('React').createElement(c('P2PLoadingMask.react'), {
                        visible: true
                    })));
                }
                return m;
            },
            render: function() {
                if (this._isPageChat()) return null;
                return (c('React').createElement(c('DeferredComponent.react'), babelHelpers['extends']({
                    deferredComponent: this._bootloadComponent,
                    deferredPlaceholder: this._renderPlaceholder()
                }, this.props)));
            },
            _renderPlaceholder: function() {
                return (c('React').createElement(c('P2PAbstractSendMoneyButton.react'), {
                    button: this.props.button,
                    className: this.props.className,
                    isActive: false,
                    isDisabled: false,
                    isMessenger: j,
                    onClick: this.onPlaceholderClick,
                    onMouseDown: function() {
                        return this._clicked = true;
                    }.bind(this),
                    onMouseOver: this._bootloadComponentNow,
                    ref: 'placeholderButton'
                }));
            },
            _bootloadComponent: function(m) {
                this._onComponentLoad = m.bind(this);
            },
            _bootloadComponentNow: function() {
                if (this._bootloadCalled) return;
                this._bootloadCalled = true;
                c('Bootloader').loadModules(["P2PSendMoneyContainer.react"], function(m) {
                    this.removeDialogStoreSub();
                    this._onComponentLoad(m);
                    this.setState({
                        showPlaceholderDialog: false
                    });
                }.bind(this), 'P2PSendMoneyContainerBootloader.react');
            },
            _isPageChat: function() {
                return !!this._getPageID();
            },
            _getPageID: function() {
                return c('getPageIDFromThreadID')(this.props.threadID);
            }
        });
    f.exports = l;
}, null);
__d('StickersDispatcher', ['Dispatcher_DEPRECATED', 'StickerConstants'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = Object.assign(new(c('Dispatcher_DEPRECATED'))(), {
        _handleUpdate: function(i, j) {
            var k = babelHelpers['extends']({
                payloadSource: i
            }, j);
            this.dispatch(k);
        },
        handleUpdateFromViewActions: function(i) {
            this._handleUpdate(c('StickerConstants').PayloadSource.VIEW_ACTION, i);
        }
    });
    f.exports = h;
}, null);
__d('StickerActions', ['BanzaiLogger', 'StickersDispatcher', 'keyMirror'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = c('keyMirror')({
            ADD_PACK: null,
            CLICKED_STICKER_IN_THREAD: null,
            HIDE_TRAY: null,
            REMOVE_PACK: null,
            REPLACE_STICKER_STATE: null,
            RESET_NUM_NEW_PACKS: null,
            SELECT_PACK: null,
            SELECT_STORE_PACK: null,
            SHOW_TRAY: null,
            UPDATE_TRAY_DATA: null,
            TRAY_DATA_READY: null,
            SUBSCRIBE_ASSOCIATED_PAGE: null
        }),
        i = {
            Types: h,
            addPack: function(j) {
                c('StickersDispatcher').dispatch({
                    type: h.ADD_PACK,
                    packID: j
                });
            },
            removePack: function(j) {
                c('StickersDispatcher').dispatch({
                    type: h.REMOVE_PACK,
                    packID: j
                });
            },
            selectPack: function(j, k) {
                if (!k) c('BanzaiLogger').log('StickersLoggerConfig', {
                    event: 'select_pack',
                    packid: j
                });
                c('StickersDispatcher').dispatch({
                    type: h.SELECT_PACK,
                    packID: j
                });
            },
            selectStorePack: function(j) {
                c('StickersDispatcher').dispatch({
                    type: h.SELECT_STORE_PACK,
                    packID: j
                });
            },
            resetNumNewPacks: function() {
                c('StickersDispatcher').dispatch({
                    type: h.RESET_NUM_NEW_PACKS
                });
            },
            handleStickerClick: function(j, k) {
                c('StickersDispatcher').dispatch({
                    packID: j,
                    threadID: k,
                    type: i.Types.CLICKED_STICKER_IN_THREAD
                });
            },
            showStickerTray: function(j) {
                c('StickersDispatcher').dispatch({
                    type: i.Types.SHOW_TRAY,
                    threadID: j
                });
            },
            hideStickerTray: function() {
                c('StickersDispatcher').dispatch({
                    type: i.Types.HIDE_TRAY
                });
            },
            updateTrayData: function() {
                c('StickersDispatcher').dispatch({
                    type: i.Types.UPDATE_TRAY_DATA
                });
            },
            loadedTrayData: function() {
                c('StickersDispatcher').dispatch({
                    type: i.Types.TRAY_DATA_READY
                });
            },
            subscribeAssociatedPage: function(j, k) {
                c('StickersDispatcher').dispatch({
                    type: i.Types.SUBSCRIBE_ASSOCIATED_PAGE,
                    packID: j,
                    callback: k
                });
            }
        };
    f.exports = i;
}, null);
__d("XMNStickerAssociatedPageSubscriptionController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/messages\/commerce\/stickers\/subscription\/", {
        pack_id: {
            type: "FBID"
        }
    });
}, null);
__d("XStickerPackImagesController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/stickers\/{pack_id}\/images\/", {
        pack_id: {
            type: "Int",
            required: true
        },
        sticker_size: {
            type: "Int",
            defaultValue: 50
        }
    });
}, null);
__d("XStickerQueryImagesController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/stickers\/query\/images\/", {
        query: {
            type: "String",
            required: true
        },
        sticker_interface: {
            type: "String"
        }
    });
}, null);
__d("XStickerStateInitialDataController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/stickers\/state\/", {});
}, null);
__d("XStickerStatePackDataController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/stickers\/state\/pack\/", {
        pack_id: {
            type: "Int",
            required: true
        }
    });
}, null);
__d("XStickerStateStoreDataController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/stickers\/state\/store\/", {});
}, null);
__d("XStickersAddPackController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/stickers\/addpack\/", {
        pack_id: {
            type: "Int"
        },
        size: {
            type: "String"
        },
        redirect_uri: {
            type: "String"
        },
        is_promoted: {
            type: "Bool",
            defaultValue: false
        },
        no_async_dom: {
            type: "Bool",
            defaultValue: false
        }
    });
}, null);
__d("XStickersRemovePackController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/stickers\/removepack\/", {
        pack_id: {
            type: "Int"
        },
        size: {
            type: "String"
        },
        redirect_uri: {
            type: "String"
        },
        no_async_dom: {
            type: "Bool",
            defaultValue: false
        }
    });
}, null);
__d('StickerServerRequests', ['Promise', 'AsyncRequest', 'XMNStickerAssociatedPageSubscriptionController', 'XStickerPackImagesController', 'XStickersAddPackController', 'XStickersRemovePackController', 'XStickerStateInitialDataController', 'XStickerStatePackDataController', 'XStickerStateStoreDataController', 'XStickerQueryImagesController'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        addPack: function(j, k, l) {
            var m = c('XStickersAddPackController').getURIBuilder().setInt('pack_id', j).setBool('is_promoted', k).getURI();
            new(c('AsyncRequest'))(m).setHandler(function(n) {
                return l(n.payload);
            }).send();
        },
        removePack: function(j, k) {
            var l = c('XStickersRemovePackController').getURIBuilder().setInt('pack_id', j).getURI();
            new(c('AsyncRequest'))(l).setHandler(function(m) {
                return k(m.payload);
            }).send();
        },
        getStickersForPack: function(j, k) {
            var l = c('XStickerPackImagesController').getURIBuilder().setInt('pack_id', j).setInt('sticker_size', k).getURI();
            return new(c('Promise'))(function(m, n) {
                return (new(c('AsyncRequest'))().setURI(l).setMethod('GET').setReadOnly(true).setHandler(function(o) {
                    return m(o.payload);
                }).send());
            });
        },
        getStickersForQuery: function(j, k, l) {
            new(c('AsyncRequest'))().setURI(c('XStickerQueryImagesController').getURIBuilder().setString('query', j).setString('sticker_interface', k).getURI()).setMethod('GET').setReadOnly(true).setHandler(function(m) {
                return l(m);
            }).send();
        },
        fetchTrayData: function(j) {
            return i(c('XStickerStateInitialDataController').getURIBuilder().getURI(), j, true);
        },
        fetchStoreData: function(j) {
            return i(c('XStickerStateStoreDataController').getURIBuilder().getURI(), j);
        },
        fetchPackData: function(j, k) {
            return i(c('XStickerStatePackDataController').getURIBuilder().setInt('pack_id', j).getURI(), k);
        },
        subscribeAssociatedPage: function(j, k) {
            var l = c('XMNStickerAssociatedPageSubscriptionController').getURIBuilder().setFBID('pack_id', j).getURI();
            new(c('AsyncRequest'))(l).setHandler(function(m) {
                return k();
            }).send();
        }
    };

    function i(j, k, l) {
        return new(c('Promise'))(function(m, n) {
            return (new(c('AsyncRequest'))(j).setHandler(function(o) {
                return m(o.getPayload());
            }).setAllowCrossPageTransition(l).send());
        }).then(k);
    }
    f.exports = h;
}, null);
__d('StickerImages', ['StickerServerRequests'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {},
        i = {},
        j = {
            requestStickersForPack: function(k, l, m) {
                if (!k) return;
                if (!i[k]) {
                    i[k] = c('StickerServerRequests').getStickersForPack(k, l);
                    i[k].then(function(n) {
                        n.forEach(function(o) {
                            return this.cacheSticker(o);
                        }.bind(this));
                    }.bind(this));
                }
                i[k].then(function(n) {
                    return m(n);
                });
            },
            cacheSticker: function(k) {
                h[k.id] = k;
            },
            getSticker: function(k) {
                return h[k];
            }
        };
    f.exports = j;
}, null);
__d('StickerState', ['ImmutableObject', 'PresenceState', 'StickerActions', 'StickerConstants', 'StickerImages', 'StickerServerRequests'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {},
        i = void 0,
        j = void 0,
        k = void 0,
        l = null,
        m = 0,
        n = {},
        o = [],
        p = [],
        q = [],
        r = null,
        s = null,
        t = c('PresenceState').get();
    if (t) r = t.tray_pack_id;
    var u = {
        onTrayDataReady: function(w) {
            if (!j) j = c('StickerServerRequests').fetchTrayData(function(x) {
                o = x.packs.map(function(y) {
                    return v(y);
                });
                k = x.mru;
                m = x.num_new_packs;
                q = x.tags;
            });
            j.then(function() {
                w();
                c('StickerActions').loadedTrayData();
            });
        },
        onStoreDataReady: function(w) {
            if (!i) i = c('StickerServerRequests').fetchStoreData(function(x) {
                p = x.packs.map(function(y) {
                    return v(y);
                });
            });
            i.then(w);
        },
        onPackDataReady: function(w, x) {
            if (!h[w]) h[w] = c('StickerServerRequests').fetchPackData(w, function(y) {
                v(y);
            });
            h[w].then(x);
        },
        getPacksInTrayAllInterfaces: function() {
            return o;
        },
        getPacksInTray: function() {
            var w = [],
                x = void 0;
            for (var y = 0; y < o.length; y++)
                if (o[y].id == c('StickerConstants').EMOTICON_PACK_ID) {
                    x = o[y];
                } else if (o[y].isMessengerCapable) w.push(o[y]);
            x && w.push(x);
            return w;
        },
        getPacksInCommentsTray: function() {
            var w = [],
                x = [],
                y = void 0;
            for (var z = 0; z < o.length; z++)
                if (o[z].id == c('StickerConstants').EMOTICON_PACK_ID) {
                    y = o[z];
                } else if (o[z].isCommentsCapable) {
                w.push(o[z]);
            } else x.push(o[z]);
            var aa = w.concat(x);
            if (y) aa.push(y);
            return aa;
        },
        getPacksInComposerTray: function() {
            return o.filter(function(w) {
                return w.isComposerCapable;
            });
        },
        getPacksInMessagesTray: function() {
            return o.filter(function(w) {
                return w.isMessengerCapable && w.id !== c('StickerConstants').EMOTICON_PACK_ID;
            });
        },
        getPacksInFramesTray: function() {
            return o.filter(function(w) {
                return w.isFramePack;
            });
        },
        getPackIDsInTray: function() {
            return o.map(function(w) {
                return w.id;
            });
        },
        getPacksInStore: function() {
            return p.filter(function(w) {
                return w.isMessengerCapable;
            });
        },
        getComposerPacksInStore: function() {
            return p.filter(function(w) {
                return w.isComposerCapable;
            });
        },
        getPack: function(w) {
            return n[w];
        },
        getNumNewPacks: function() {
            return m;
        },
        getFeaturedTags: function() {
            return q;
        },
        resetNumNewPacks: function() {
            m = 0;
        },
        addMRUPack: function() {
            if (k) {
                this._addPackToTray(k);
                k = null;
            }
        },
        addPack: function(w) {
            var x = false;
            if (n[w]) x = n[w].isPromoted;
            c('StickerServerRequests').addPack(w, x, function(y) {
                this._addPackToTray(y);
            }.bind(this));
        },
        removePack: function(w) {
            c('StickerServerRequests').removePack(w, function(x) {
                o = o.filter(function(y) {
                    return y.id !== x;
                });
                n[x] = c('ImmutableObject').set(n[x], {
                    isInTray: false
                });
                p = p.map(function(y) {
                    return n[y.id];
                });
                c('StickerActions').updateTrayData();
            });
        },
        setTrayPackID: function(w) {
            r = w;
            c('PresenceState').doSync();
        },
        getTrayPackID: function(w) {
            if (w && w.length > 0 && !w.some(function(x) {
                    return x.id === r;
                })) {
                return w[0].id;
            } else return r;
        },
        setStorePackID: function(w) {
            s = w;
        },
        getStorePackID: function() {
            return s;
        },
        subscribeAssociatedPage: function(w, x) {
            c('StickerServerRequests').subscribeAssociatedPage(w, function() {
                n[w] = c('ImmutableObject').set(n[w], {
                    isAssociatedPageSubscribed: true
                });
                p = p.map(function(y) {
                    return n[y.id];
                });
                c('StickerActions').updateTrayData();
                x();
            });
        },
        _addPackToTray: function(w, x) {
            v(w);
            n[w.id] = c('ImmutableObject').set(n[w.id], {
                isPurchased: !x,
                isInTray: true
            });
            var y = o.filter(function(aa) {
                return aa.id === w.id;
            }).length > 0;
            if (!y) {
                var z = void 0;
                if (!x) {
                    z = o.filter(function(aa) {
                        return aa.isMRU || aa.isSearch;
                    }).length;
                } else z = o.filter(function(aa) {
                    return aa.id !== c('StickerConstants').EMOTICON_PACK_ID;
                }).length;
                o.splice(z, 0, n[w.id]);
            }
            p = p.map(function(aa) {
                return n[aa.id];
            });
            c('StickerActions').updateTrayData();
        },
        _addRecentlyUsedSticker: function(w) {
            for (var x = 0; x < l.length; ++x)
                if (l[x].id === w.id) {
                    l.splice(x, 1);
                    break;
                }
            l.unshift(w);
        },
        getMRUStickerPack: function(w) {
            if (!l) l = w;
            return l;
        },
        updateRecentlyUsed: function(w) {
            if (!l) {
                this.addMRUPack();
                return;
            }
            this._addRecentlyUsedSticker(c('StickerImages').getSticker(w));
        }
    };
    c('PresenceState').registerStateStorer(function(w) {
        w.tray_pack_id = r;
    });

    function v(w) {
        var x = w.id;
        if (!n[x]) {
            return n[x] = new(c('ImmutableObject'))(w);
        } else return n[x] = c('ImmutableObject').set(n[x], w);
    }
    f.exports = u;
}, null);
__d('AbstractDialogFitHeight', ['csx', 'cx', 'CSS', 'DOM', 'Event', 'Style', 'SubscriptionsHandler', 'Vector', 'throttle'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = 450,
        k = 100,
        l = 67,
        m = 67;

    function n(o) {
        'use strict';
        this.$AbstractDialogFitHeight1 = o;
    }
    n.prototype.enable = function() {
        'use strict';
        this.$AbstractDialogFitHeight2 = new(c('SubscriptionsHandler'))();
        this.$AbstractDialogFitHeight2.addSubscriptions(this.$AbstractDialogFitHeight1.subscribe('beforeshow', this.$AbstractDialogFitHeight3.bind(this)), c('Event').listen(window, 'resize', c('throttle')(this.$AbstractDialogFitHeight3.bind(this))));
        this.$AbstractDialogFitHeight4 = c('DOM').find(this.$AbstractDialogFitHeight1.getRoot(), "._4-i2");
        c('CSS').addClass(this.$AbstractDialogFitHeight4, "_5pfh");
        this.$AbstractDialogFitHeight5 = k;
        if (c('DOM').scry(this.$AbstractDialogFitHeight1.getRoot(), "._4-i0").length) this.$AbstractDialogFitHeight5 += l;
        if (c('DOM').scry(this.$AbstractDialogFitHeight1.getRoot(), "._5a8u").length) this.$AbstractDialogFitHeight5 += m;
    };
    n.prototype.disable = function() {
        'use strict';
        this.$AbstractDialogFitHeight2.release();
        this.$AbstractDialogFitHeight2 = null;
        c('CSS').removeClass(this.$AbstractDialogFitHeight4, "_5pfh");
    };
    n.prototype.$AbstractDialogFitHeight3 = function() {
        'use strict';
        var o = c('Vector').getViewportDimensions().y,
            p = o - this.$AbstractDialogFitHeight5;
        c('Style').set(this.$AbstractDialogFitHeight4, this.getHeightProperty(), Math.max(j, p) + 'px');
        this.$AbstractDialogFitHeight1.updatePosition();
    };
    f.exports = n;
}, null);
__d('DialogFitHeight', ['AbstractDialogFitHeight'], function a(b, c, d, e, f, g) {
    var h, i;
    if (c.__markCompiled) c.__markCompiled();
    h = babelHelpers.inherits(j, c('AbstractDialogFitHeight'));
    i = h && h.prototype;
    j.prototype.getHeightProperty = function() {
        'use strict';
        return 'height';
    };

    function j() {
        'use strict';
        h.apply(this, arguments);
    }
    f.exports = j;
}, null);
__d('StickerStoreController', ['cx', 'Bootloader', 'DialogFitHeight', 'DOM', 'LayerAutoFocus', 'LayerFadeOnHide', 'LayerHideOnEscape', 'React', 'ReactComponentRenderer', 'StickerActions', 'XUIDialog.react', 'XUIDialogBody.react', 'XUISpinner.react', 'isSocialPlugin', 'requestAnimationFrame'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = 688,
        k = 320,
        l = null,
        m = c('React').createClass({
            displayName: 'StoreLayer',
            propTypes: {
                isComposer: i.bool,
                shown: i.bool
            },
            getDefaultProps: function() {
                return {
                    isComposer: false,
                    shown: false
                };
            },
            getInitialState: function() {
                return {
                    renderStore: function() {
                        return (c('React').createElement('div', {
                            className: "_5r5e"
                        }, c('React').createElement(c('XUISpinner.react'), {
                            background: 'light',
                            size: 'large'
                        })));
                    }
                };
            },
            componentDidMount: function() {
                c('Bootloader').loadModules(["StickerStore.react"], function(p) {
                    this.setState({
                        renderStore: function() {
                            return (c('React').createElement(p, {
                                isComposer: this.props.isComposer,
                                shown: this.props.shown
                            }));
                        }.bind(this)
                    });
                }.bind(this), 'StickerStoreController');
            },
            _onToggle: function(p) {
                c('requestAnimationFrame')(function() {
                    if (l) l.setProps({
                        shown: p
                    });
                });
            },
            render: function() {
                var p = c('isSocialPlugin')() && document.body.offsetWidth < j ? k : j;
                return (c('React').createElement(c('XUIDialog.react'), {
                    behaviors: {
                        DialogFitHeight: c('DialogFitHeight'),
                        LayerAutoFocus: c('LayerAutoFocus'),
                        LayerFadeOnHide: c('LayerFadeOnHide'),
                        LayerHideOnEscape: c('LayerHideOnEscape')
                    },
                    onToggle: this._onToggle,
                    shown: this.props.shown,
                    width: p
                }, c('React').createElement(c('XUIDialogBody.react'), {
                    className: "_5rq- autofocus"
                }, this.state.renderStore())));
            }
        });

    function n(p) {
        var q = c('DOM').create('div');
        c('DOM').appendContent(document.body, q);
        l = new(c('ReactComponentRenderer'))(m, q);
        l.setProps({
            isComposer: p,
            shown: true
        });
    }
    var o = {
        showStore: function(p, q) {
            if (!l) {
                n(!!q);
            } else l.setProps({
                shown: true,
                isComposer: !!q
            });
            c('StickerActions').selectStorePack(p);
        }
    };
    f.exports = o;
}, null);
__d('StickerStateStore', ['FluxStore', 'StickerActions', 'StickerInterfaces', 'StickersDispatcher', 'StickerState', 'StickerStoreController', 'arrayContains', 'emptyFunction'], function a(b, c, d, e, f, g) {
    'use strict';
    var h, i;
    if (c.__markCompiled) c.__markCompiled();
    h = babelHelpers.inherits(j, c('FluxStore'));
    i = h && h.prototype;

    function j() {
        i.constructor.call(this, c('StickersDispatcher'));
        this.$StickerStateStore3 = false;
    }
    j.prototype.getState = function(k) {
        var l = null;
        if (k === c('StickerInterfaces').COMPOSER) {
            l = c('StickerState').getPacksInComposerTray();
        } else if (k === c('StickerInterfaces').COMMENTS) {
            l = c('StickerState').getPacksInCommentsTray();
        } else if (k === c('StickerInterfaces').MESSAGES) {
            l = c('StickerState').getPacksInMessagesTray();
        } else if (k === c('StickerInterfaces').FRAMES) {
            l = c('StickerState').getPacksInFramesTray();
        } else l = c('StickerState').getPacksInTray();
        return {
            showTray: this.$StickerStateStore1,
            storePackID: c('StickerState').getStorePackID(),
            packID: c('StickerState').getTrayPackID(l),
            trayPacks: l,
            numNewPacks: c('StickerState').getNumNewPacks(),
            threadID: this.$StickerStateStore2,
            trayDataReady: this.$StickerStateStore3
        };
    };
    j.prototype.isPackInTray = function(k) {
        if (!this.$StickerStateStore3) c('StickerState').onTrayDataReady(c('emptyFunction'));
        var l = c('StickerState').getPacksInTrayAllInterfaces();
        return l.some(function(m) {
            return m.id === k;
        });
    };
    j.prototype.isPackPageSubscribed = function(k) {
        if (!this.$StickerStateStore3) c('StickerState').onTrayDataReady(c('emptyFunction'));
        var l = c('StickerState').getPacksInTrayAllInterfaces();
        return l.some(function(m) {
            return m.id === k && m.isAssociatedPageSubscribed;
        });
    };
    j.prototype.__onDispatch = function(k) {
        var l = c('StickerActions').Types;
        switch (k.type) {
            case l.REPLACE_STICKER_STATE:
                this.$StickerStateStore1 = !!k.showTray;
                break;
            case l.SHOW_TRAY:
                this.$StickerStateStore1 = true;
                this.$StickerStateStore2 = k.threadID;
                break;
            case l.HIDE_TRAY:
                this.$StickerStateStore1 = false;
                break;
            case l.CLICKED_STICKER_IN_THREAD:
                c('StickerState').onTrayDataReady(function() {
                    if (c('arrayContains')(c('StickerState').getPackIDsInTray(), k.packID)) {
                        c('StickerState').setTrayPackID(k.packID);
                        this.$StickerStateStore1 = true;
                        this.$StickerStateStore2 = k.threadID;
                    } else {
                        this.$StickerStateStore1 = false;
                        c('StickerStoreController').showStore(k.packID);
                    }
                }.bind(this));
                break;
            case l.SELECT_PACK:
                c('StickerState').setTrayPackID(k.packID);
                break;
            case l.SELECT_STORE_PACK:
                c('StickerState').setStorePackID(k.packID);
                break;
            case l.RESET_NUM_NEW_PACKS:
                c('StickerState').resetNumNewPacks();
                break;
            case l.ADD_PACK:
                c('StickerState').addPack(k.packID);
                break;
            case l.REMOVE_PACK:
                c('StickerState').removePack(k.packID);
                break;
            case l.UPDATE_TRAY_DATA:
                break;
            case l.TRAY_DATA_READY:
                this.$StickerStateStore3 = true;
                break;
            case l.SUBSCRIBE_ASSOCIATED_PAGE:
                c('StickerState').subscribeAssociatedPage(k.packID, k.callback);
                break;
        }
        this.__emitChange();
    };
    f.exports = new j();
}, null);
