import { Modal, Button, Text, Stack } from "@mantine/core";

interface LogoutConfirmModalProps {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
function LogoutConfirmModal({
  opened,
  onClose,
  onConfirm,
}: LogoutConfirmModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      withCloseButton={false}
      radius="lg"
      padding="lg"
      size="xs"
      styles={{
        content: {
          backgroundColor: "#F9FAFB", // 👈 any color
          maxWidth: 220,
        },
      }}
      overlayProps={{
        opacity: 1,
        blur: 0,
      }}
    >
      <Stack gap="xs">
        {/* Main statement */}
        <Text fw={600} size="sm" ta="center">
          Log out of your account?
        </Text>

        {/* Description */}
        <Text size="xs" c="dimmed" ta="center">
          You can log back in anytime using your credentials.
        </Text>

        {/* Actions */}
        <Stack gap={6} mt="sm">
          <Button color="red" fullWidth radius="md" onClick={onConfirm}>
            Log out
          </Button>

          <Button
            variant="subtle"
            color="gray"
            fullWidth
            radius="md"
            onClick={onClose}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default LogoutConfirmModal;
