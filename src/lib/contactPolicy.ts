/*
 * Shared contact-form policy used by both the React form
 * (src/components/asw/ConsultationForm.tsx) and the server validator
 * (src/app/api/contact/route.ts). Keeping this single source of truth
 * prevents client/server validation from drifting — they MUST agree, or
 * the user gets a confusing rejection AFTER passing the client checks.
 */

/** Channels that physically need a phone number to reach the visitor.
    Values match the labels in CONTACT_METHODS (ConsultationForm.tsx). */
export const PHONE_REQUIRED_CONTACT_METHODS = [
  "Hovor",
  "SMS",
  "WhatsApp",
] as const;

/** Returns true when the chosen `preferredContact` value requires a phone
 *  number to be filled in. Unknown / empty / "E-mail" → false. */
export function requiresPhone(preferredContact: string): boolean {
  return (PHONE_REQUIRED_CONTACT_METHODS as readonly string[]).includes(
    preferredContact,
  );
}
