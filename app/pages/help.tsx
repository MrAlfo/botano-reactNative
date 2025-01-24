import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Image } from "expo-image";
import { ExerciseCard } from "@/components/ExerciseCard";
import { ProductCard } from "@/components/ProductCard";
import { RelatedProduct } from "@/components/RelatedProduct";
import { PriceDisplay } from "@/components/PriceDisplay";
import BottomSheetModal from "@/components/BottomSheetModal";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface BottomSheetProps {
  isOpen: Animated.SharedValue<boolean>;
  toggleSheet: () => void;
  duration?: number;
  children: React.ReactNode;
}

// BottomSheet Bileşeni
function BottomSheet({
  isOpen,
  toggleSheet,
  duration = 500,
  children,
}: BottomSheetProps) {
  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, { duration })
  );

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: progress.value * 2 * height.value }],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: isOpen.value
      ? 1
      : withDelay(duration, withTiming(-1, { duration: 0 })),
  }));

  return (
    <>
      <Animated.View style={[sheetStyles.backdrop, backdropStyle]}>
        <TouchableOpacity style={styles.flex} onPress={toggleSheet} />
      </Animated.View>
      <Animated.View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={[sheetStyles.sheet, sheetStyle]}
      >
        {children}
      </Animated.View>
    </>
  );
}

const KartModal = () => {
  const [isSheetVisible, setIsSheetVisible] = React.useState(true);
  const isOpen = useSharedValue(false);
  const router = useRouter();

  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };

  const openSheet = () => setIsSheetVisible(true);
  const closeSheet = () => setIsSheetVisible(false);
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView style={styles.screenContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/")}
        >
          <Text style={styles.backText}>X</Text>
        </TouchableOpacity>

        <View style={styles.mainContent}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e01f919a-13da-4e19-9516-3487e084c232?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0",
            }}
            style={styles.mainImage}
          />

          <View style={styles.contentContainer}>
            <ExerciseCard
              title="Running Exercise"
              description="Slow down and feel your breath. Count each step as your feet touch the ground, tuning into your body's rhythm. Let yourself flow with each stride."
              iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4e268c587e459aed95e4e94850c283a01e776427754cabb8b98f4d884ef3e69a?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0"
            />

            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e58faa22cce2424a22821644f3a7ae4710ea7bff70c4962ca480599f473b1580?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0",
              }}
              style={styles.dividerImage}
            />

            <ProductCard
              title="Best Practice"
              description="Select or customize your avatar and enter your social media account information to personalize your profile."
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/20cd5df84b22865bd8322602117a14f2994f85cd6149642e3100852e527c2896?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0"
            />

            <RelatedProduct
              title="Releated Product"
              description="Select or customize your avatar and enter your social media account information to personalize your profile."
            />
            <PriceDisplay
              title="Advanced Juice Reboot by JRINK by Purée Regular price"
              price="$150"
              subtitle="Sustainably Wild Harvested Chaga Mushroom"
              images={[
                "https://cdn.builder.io/api/v1/image/assets/TEMP/00a158dfd32bdb68f526b60eb767973e4037a8c27231b1bf40233e59293b1f9f?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/a0f3dabfa93ecdb1ad1ecfa5a3707b98e904a4f8f83e61b4e41f4f7836782ee2?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0",
              ]}
            />
            <TouchableOpacity style={styles.actionButton} onPress={toggleSheet}>
              <Text style={styles.actionButtonText}>Ok, I'm in!</Text>
            </TouchableOpacity>

            {isSheetVisible && <BottomSheetModal closeSheet={closeSheet} />}
          </View>
        </View>
      </ScrollView>
      <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.sheetContent}>
        <TouchableOpacity
          style={styles.backButtonModal}
          onPress={toggleSheet}
        >
          <Ionicons name="arrow-back" size={32} color="gray" />
        </TouchableOpacity>
          <Text style={styles.cardCompletedText}>CARD COMPLETED!</Text>
          <Text style={styles.greatText}>Great!</Text>
          <Text style={styles.subtitle}>
            Plant Care Day{" "}
            <Text style={styles.subtitleBold}>
              Kartını başarıyla tamamladınız.
            </Text>
          </Text>
          <View style={styles.pointsContainer}>
            <View style={styles.circle}>
              <Text style={styles.pointText}>5</Text>
              <Image
                source={require("../../assets/images/leaf.png")}
                style={styles.leafIcon}
              />
            </View>
          </View>
          <Text style={styles.extraPointsText}>
            Daha fazla puan kazanmak için{"\n"}
            <Text style={styles.extraPointsBold}>video yükleyebilirsiniz.</Text>
          </Text>
          <View style={styles.iconsContainer}>
            <View style={styles.iconBox}>
              <Image
                // source={require("./assets/camera.png")}
                style={styles.iconImage}
              />
              <Text style={styles.iconText}>+1</Text>
            </View>
            <View style={styles.iconBox}>
              <Image
                // source={require("./assets/mic.png")}
                style={styles.iconImage}
              />
              <Text style={styles.iconText}>+1</Text>
            </View>
            <View style={[styles.iconBox, styles.disabled]}>
              <Image
                // source={require("./assets/video.png")}
                style={styles.iconImage}
              />
              <Text style={styles.iconText}>-</Text>
            </View>
          </View>
          <View style={styles.nextCardContainer}>
            <Text style={styles.nextCardTitle}>RELATED CARDS</Text>
            <Text style={styles.cardTitle}>Plant Care Day</Text>
            <View style={styles.nextCardContent}>
              <TouchableOpacity>
                <Text style={styles.arrowText}>{"<"}</Text>
              </TouchableOpacity>
              <View style={styles.card}>
                <Image
                  source={require("../../assets/images/woman.png")}
                  style={styles.cardImage}
                />
              </View>
              <TouchableOpacity>
                <Text style={styles.arrowText}>{">"}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.newCardButton}>
              <Text style={styles.newCardButtonText}>CONTINUE NEW CARD</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nextCardContainer}>
            <Text style={styles.nextCardTitle}>RELATED CARDS</Text>
            <Text style={styles.cardTitle}>Plant Care Day</Text>
            <View style={styles.nextCardContent}>
              <TouchableOpacity>
                <Text style={styles.arrowText}>{"<"}</Text>
              </TouchableOpacity>
              <View style={styles.card}>
                <Image
                  source={require("../../assets/images/woman.png")}
                  style={styles.cardImage}
                />
              </View>
              <TouchableOpacity>
                <Text style={styles.arrowText}>{">"}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.newCardButton}>
              <Text style={styles.newCardButtonText}>CONTINUE NEW CARD</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
const sheetStyles = StyleSheet.create({
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

export default KartModal;
