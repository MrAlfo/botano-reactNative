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
import { styles, sheetStyles } from './styles/help'

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


export default KartModal;
