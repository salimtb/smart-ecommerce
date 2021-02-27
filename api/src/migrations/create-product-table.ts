module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('products', {
            orderingQuotaId: {
                type: Sequelize.BIGINT,
                field: 'ordering_quota_id',
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            pickupScheduleId: {
                type: Sequelize.BIGINT,
                field: 'pickup_schedule_pickup_schedule_id',
                allowNull: false,
            },
            consumptionMode: {
                type: Sequelize.ENUM('1', '2', '3', '4'),
                allowNull: false,
            },
            orderingQuota: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('ordering_quota');
    },
};
