import { TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client"

export const TRANSACTION_CATEGORY_LABELS = {
    EDUCATION: "Educação",
    FOOD: "Alimentação",
    HEALTH: "Saúde",
    HOUSING: "Casa",
    ENTERTAINMENT: "Lazer",
    TRANSPORTATION: "Transporte",
    OTHER: "Outros",
    SALARY: "Salário",
    UTILITY: "Utilidade",
  };
  
  export const TRANSACTION_PAYMENT_METHOD_LABELS = {
    CASH: "Dinheiro",
    CREDIT_CARD: "Cartão de crédito",
    DEBIT_CARD: "Cartão de debito",
    BANK_TRANSFER: "Transferência bancária",
    BANK_SLIP: "Boleto bancário",
    PIX: "PIX",
    OTHER: "Outros",
  };

  export const TRANSACTION_TYPE_OPTIONS = [
    {
       value: TransactionType.EXPENSE,
       label: "Despesa",
    },
    {
       value: TransactionType.DEPOSIT,
       label: "Depósito",
    },
    {
       value: TransactionType.INVESTMENT,
       label: "Investimento",
    },
 ];

 export const PAYMENT_METHOD_OPTIONS = [
   {
      value: TransactionPaymentMethod.CASH,
      label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CASH],
   },
   {
      value: TransactionPaymentMethod.CREDIT_CARD,
      label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CREDIT_CARD],
   },
   {
      value: TransactionPaymentMethod.DEBIT_CARD,
      label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.DEBIT_CARD],
   },
   {
      value: TransactionPaymentMethod.BANK_TRANSFER,
      label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_TRANSFER],
   },
   {
      value: TransactionPaymentMethod.BANK_SLIP,
      label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_SLIP],
   },
   {
      value: TransactionPaymentMethod.PIX,
      label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.PIX],
   },
   {
      value: TransactionPaymentMethod.OTHER,
      label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.OTHER],
   }
 ];

 export const TRANSACTION_CATEGORY_OPTIONS = [
   {
     value: TransactionCategory.EDUCATION,
     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.EDUCATION],
   },
   {
     value: TransactionCategory.ENTERTAINMENT,
     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.ENTERTAINMENT],
   },
   {
     value: TransactionCategory.FOOD,
     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.FOOD],
   },
   {
     value: TransactionCategory.HEALTH,
     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HEALTH],
   },
   {
     value: TransactionCategory.HOUSING,
     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HOUSING],
   },
   {
     value: TransactionCategory.OTHER,
     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.OTHER],
   },
   {
     value: TransactionCategory.SALARY,
     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.SALARY],
   },
   {
     value: TransactionCategory.TRANSPORTATION,
     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
   },
   {
     value: TransactionCategory.UTILITY,
     label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.UTILITY],
   },
 ];