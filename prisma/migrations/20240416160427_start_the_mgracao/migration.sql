-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `count_tarefa` BIGINT NULL,
    `titulo_cat` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tarefas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tarefa` VARCHAR(191) NOT NULL,
    `status` ENUM('CONCLUIDO', 'NAO_CONCLUIDO') NULL DEFAULT 'NAO_CONCLUIDO',
    `criado_em` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `editado_em` DATETIME(3) NULL,
    `categoriaId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Tarefas` ADD CONSTRAINT `Tarefas_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Categoria`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
