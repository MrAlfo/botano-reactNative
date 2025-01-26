import {
    StyleSheet,
} from "react-native";

export const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: "#38635A",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        paddingTop: 21,
        paddingBottom: 21,
        fontFamily: "Poppins_Regular",
    },
    sheetContent: {
        flex: 1,
        marginHorizontal: 0
    },
    backButton: {
        borderRadius: 90,
        borderColor: "#FFFFFF",
        borderWidth: 2,
        maxHeight: 40,
        padding: 8,
        alignItems: "center",
        width: 40,
        right: 20,
        top: 20,
        position: "absolute",
        zIndex: 3,
        opacity: 0.45,
    },
    backIcon: {
        width: 14,
        aspectRatio: 1,
        color: "#fff",
    },
    backText: {
        color: "#fff",
    },
    mainContent: {
        marginTop: 80,
        width: "100%",
        paddingLeft: 20,
        marginBottom: 40,
    },
    mainImage: {
        width: "100%",
        aspectRatio: 0.75,
    },
    contentContainer: {
        marginTop: 20,
        minHeight: 852,
        width: "100%",
        paddingEnd: 20,
    },
    dividerImage: {
        marginTop: 40,
        minHeight: 40,
        width: 133,
        aspectRatio: 3.32,
    },
    actionButton: {
        borderRadius: 40,
        marginTop: 29,
        padding: 16,
        borderColor: "#ffffff",
        borderWidth: 1,
        backgroundColor: "#fff",
    },
    actionButtonText: {
        fontSize: 20,
        color: "#38635A",
        fontFamily: "Poppins_Regular",
        fontWeight: "600",
        textAlign: "center",
    },
    text: {
        fontFamily: "Poppins_Regular",
    },
    flex: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
    },
    safeArea: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    toggleButton: {
        backgroundColor: "#b58df1",
        padding: 12,
        borderRadius: 48,
    },
    toggleButtonText: {
        color: "white",
        fontWeight: "600",
    },
    bottomSheetText: {
        fontSize: 16,
        textAlign: "center",
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    bottomSheetButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#b58df1",
        borderRadius: 8,
    },
    bottomSheetButtonText: {
        color: "white",
        fontWeight: "600",
    },
    containerModal: {
        flex: 1,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 47,
        borderTopRightRadius: 47,
        paddingHorizontal: 20,
        paddingTop: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    modalHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    backButtonModal: {
        width: 35,
        height: 35,
        position: 'fixed',
        display: 'flex',
        top: 30,
        left: 0,
        zIndex: 3
    },
    backIconModal: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    cardCompletedText: {
        fontSize: 16,
        fontWeight: "400",
        textTransform: "uppercase",
        color: "rgba(0, 0, 0, 0.4)",
        textAlign: "center",
    },
    greatText: {
        fontSize: 24,
        fontWeight: "800",
        fontFamily: "Poppins_Bold",
        textAlign: "center",
        color: "#323534",
        marginVertical: 10,
    },
    subtitle: {
        textAlign: "center",
        fontFamily: "Poppins_Regular",
        fontSize: 14,
        lineHeight: 20,
        color: "#323534",
        marginBottom: 20,
        fontWeight: "700",
    },
    subtitleBold: {
        fontWeight: "400",
    },
    pointsContainer: {
        alignItems: "center",
        marginVertical: 20,
    },
    circle: {
        width: 109,
        height: 109,
        borderRadius: 109 / 2,
        backgroundColor: "#B6D9ED",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    pointText: {
        fontSize: 50,
        fontWeight: "700",
        color: "#000",
    },
    leafIcon: {
        width: 42,
        height: 42,
        position: "absolute",
        right: 0,
        top: 0,
    },
    extraPointsText: {
        textAlign: "center",
        fontSize: 14,
        lineHeight: 20,
        color: "#323534",
        marginBottom: 20,
    },
    extraPointsBold: {
        fontWeight: "600",
    },
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    iconBox: {
        width: 80,
        height: 50,
        borderRadius: 27.5,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    iconImage: {
        width: 24,
        height: 24,
        marginRight: 5,
    },
    iconText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#323534",
    },
    disabled: {
        opacity: 0.3,
        borderColor: "rgba(0, 0, 0, 0.7)",
    },
    nextCardContainer: {
        marginTop: 30,
        alignItems: "center",
        backgroundColor: 'rgba(231, 242, 243, 0.7)',
        borderRadius: 20
    },
    nextCardTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: "#323534",
        marginBottom: 10,
        marginTop: 20,
        fontFamily: 'Poppins_Regular'
    },
    nextCardContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    card: {
        width: 200,
        height: 250,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
    },
    cardImage: {
        width: 160,
        height: 180,
        borderRadius: 10,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: "#323534",
        textAlign: "center",
        fontFamily: 'Poppins_Regular'
    },
    arrowText: {
        fontSize: 24,
        fontWeight: "700",
        color: "#323534",
    },
    newCardButton: {
        backgroundColor: "#000",
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    newCardButtonText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#FFF",
    },
});

// BottomSheet için Stil
export const sheetStyles = StyleSheet.create({
    sheet: {
        paddingVertical: 0,
        height: '90%',
        width: "100%",
        position: "absolute",
        bottom: 0,
        borderTopRightRadius: 47,
        borderTopLeftRadius: 47,
        zIndex: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
});